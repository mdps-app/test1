<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if !$page.data.user}
	<form action="/logout?/logout" method="POST">
		<button>ログアウト</button>
	</form>
{:else}
	<a href="/login">ログイン</a>
	<a href="/register">新規登録</a>
{/if}

<slot />
