<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    variation?: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone';
  }

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};

  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' =
    ctx.variation || 'outlined';

  export let ariaLabel = 'edit location alt';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  aria-label={ariaLabel}
  viewBox="0 0 24 24"
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
  {#if variation === 'outlined'}
    <path
      d="M11 11h2.12l6.16-6.16-2.12-2.12L11 8.88V11zm9.71-9L20 1.29a.996.996 0 0 0-1.41 0l-.72.72 2.12 2.12.72-.72a.996.996 0 0 0 0-1.41zM17.9 9.05c.06.36.1.74.1 1.15 0 1.71-1.08 4.64-6 9.14-4.92-4.49-6-7.43-6-9.14C6 6.17 9.09 4 12 4c.32 0 .65.03.97.08l1.65-1.65A8.56 8.56 0 0 0 12 2c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8 0-1.01-.16-1.94-.45-2.8L17.9 9.05z"
    />
  {:else if variation === 'filled'}
    <path
      d="M13.95 13H9V8.05l5.61-5.61A8.17 8.17 0 0 0 12 2c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8 0-1.01-.16-1.94-.45-2.8l-5.6 5.6z"
    /><path
      d="M11 11h2.12l6.16-6.16-2.12-2.12L11 8.88zm9.71-9L20 1.29c-.2-.19-.45-.29-.71-.29-.13 0-.48.07-.71.29l-.72.72 2.12 2.12.72-.72c.4-.39.4-1.02.01-1.41z"
    />
  {:else if variation === 'round'}
    <path
      d="M13.54 13H10c-.55 0-1-.45-1-1V8.46c0-.26.11-.52.29-.7l5.32-5.32A8.17 8.17 0 0 0 12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.44 6.92 7.33 11.22.38.33.96.33 1.34 0C17.56 17.12 20 13.37 20 10.2c0-1.01-.16-1.94-.45-2.8l-5.31 5.31c-.18.18-.44.29-.7.29z"
    /><path
      d="M11 11h2.12l6.16-6.16-2.12-2.12L11 8.88zm9.71-9L20 1.29a.996.996 0 0 0-1.41 0l-.72.72 2.12 2.12.72-.72a.996.996 0 0 0 0-1.41z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M13.95 13H9V8.05l5.61-5.61A8.17 8.17 0 0 0 12 2c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8 0-1.01-.16-1.94-.45-2.8l-5.6 5.6zM11 11h2.12l6.16-6.16-2.12-2.12L11 8.88V11zM19.29.59l-1.42 1.42 2.12 2.12 1.42-1.42L19.29.59z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M17.9 9.05c.06.36.1.74.1 1.15 0 1.71-1.08 4.64-6 9.14-4.92-4.49-6-7.43-6-9.14C6 6.17 9.09 4 12 4c.32 0 .65.03.97.08l1.65-1.65A8.56 8.56 0 0 0 12 2c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8 0-1.01-.16-1.94-.45-2.8L17.9 9.05zM20.71 2 20 1.29a.996.996 0 0 0-1.41 0l-.72.72 2.12 2.12.72-.72a.996.996 0 0 0 0-1.41zM11 11h2.12l6.16-6.16-2.12-2.12L11 8.88V11z"
    /><path
      d="M13.95 13H9V8.05l3.97-3.97C12.65 4.03 12.32 4 12 4c-2.91 0-6 2.17-6 6.2 0 1.71 1.08 4.64 6 9.14 4.92-4.49 6-7.43 6-9.14 0-.4-.04-.78-.1-1.15L13.95 13z"
      opacity=".3"
    />
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-google-materialdesign-icons.codewithshin.com)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' =
    ctx.variation || 'outlined';
@prop export let ariaLabel = 'edit location alt';
-->
