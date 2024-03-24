import { db } from "$lib/prisma";
import { fail, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    post : async ({request, locals}) => {
        const data = await request.formData()
        const content = data.get("content");

        if (typeof content !== "string" || !content) {
            return fail(400, { message: "タイトルと内容は必須入力です。"})
        }

        if (!locals.user) return fail(400, {message: "登録されていないユーザーです。"})

        await db.post.create({
            data: {
                userId: locals.user.id,
                content
            }
        })

        throw redirect(303, '/')
    }
}