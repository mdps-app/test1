<script lang="ts">
    import type { ActionData } from "./$types"
    export let form: ActionData
</script>
<h1>ユーザー登録</h1>
{#if form?.message}
  <p class="error">{form?.message}</p>
{/if}

<h1>ユーザー登録</h1>
<form method="post" action="?/register">
    <label>名前：
        <input name="name" type="text" />
    </label>
    <label>パスワード：
        <input name="password" type="password" />
    </label>
    <button>登録する</button>
</form>

<style type="scss">
    .error {
        color: red;
    }
</style>