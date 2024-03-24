<script lang="ts">
	import type { ActionData, PageData } from './$types';
	type comment = {
		user: {
			name: string;
		};
		content: string;
		created_at: Date;
	};

	export let data: PageData;
	export let form: ActionData;

	const threadAuthor: string = data.threadDetail.user.name;
	const threadContent: string = data.threadDetail.content;
	const threadCreatedAt: Date = data.threadDetail.created_at;
	const comments: comment[] = data.threadDetail.Comment;
</script>

<div>
	<a href="/"> ＜ 一覧に戻る</a>
</div>

<h1>スレッド詳細</h1>
<h2>{threadContent}</h2>
<p>作成者：{threadAuthor} 作成日時：{threadCreatedAt}</p>
<h2>コメント</h2>
{#if comments.length}
	{#each comments as comment}
		<p>名前：{comment.user.name}</p>
		<p>日時：{comment.created_at}</p>
		<p>コメント：{comment.content}</p>
		<br />
	{/each}
{:else}
	<p>コメントはありません</p>
{/if}

<div>
	{#if form?.message}
		<p class="error">{form.message}</p>
	{/if}
</div>
<form method="POST" action="?/comment">
	<input name="comment" type="text" />
	<button>コメントする</button>
</form>

<style>
	.error {
		color: red;
	}
</style>
