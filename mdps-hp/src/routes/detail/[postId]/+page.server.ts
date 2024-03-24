import { db } from "$lib/prisma"
import { error, fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params } ) => {
    const threadDetail = await db.post.findUnique({
        where: {
            id : Number(params.postId) 
        },
        include: {
            Comment : {
                orderBy: { id : 'desc'},
                select: {
                    content: true,
                    created_at: true,
                    user: {
                        select:{
                            name: true
                        }
                    }
                }
            },
            user: {
                select: {
                    name: true
                }
            }
        },
    });
    
    if(!threadDetail) throw error(404, {message: "存在しないスレッドです。"})

    return { threadDetail }
}

export const actions: Actions = {
    comment : async ({request,locals, params}) => {
        const data = await request.formData();
        const comment = data.get("comment");
        if (typeof comment != "string" || !comment) {
            return fail(400, { message: "コメントは必須入力です。" })
        }
        
        await db.comment.create({
            data: {
                userId: locals.user.id,
                postId: Number(params.postId),
                content: comment
            }
        })
    }
}