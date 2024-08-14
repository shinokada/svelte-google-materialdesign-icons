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

  export let ariaLabel = 'no cell';
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
      d="M17 6v8.17l2 2V3c0-1.1-.9-1.99-2-1.99L7 1c-.85 0-1.58.55-1.87 1.3L8.83 6H17zM7 3h10v1H7V3zm14.19 18.19L19 19l-2-2L7 7 5 5 2.81 2.81 1.39 4.22 5 7.83V21c0 1.1.9 2 2 2h10c.85 0 1.58-.55 1.87-1.3l.91.91 1.41-1.42zM17 21H7v-1h10v1zM7 18V9.83L15.17 18H7z"
    />
  {:else if variation === 'filled'}
    <path
      d="m8.83 6-3.7-3.7C5.42 1.55 6.15 1 7 1l10 .01c1.1 0 2 .89 2 1.99v13.17l-2-2V6H8.83zm10.95 16.61-.91-.91c-.29.75-1.02 1.3-1.87 1.3H7c-1.1 0-2-.9-2-2V7.83L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zM15.17 18 7 9.83V18h8.17z"
    />
  {:else if variation === 'round'}
    <path
      d="m8.83 6-3.7-3.7C5.42 1.55 6.15 1 7 1l10 .01c1.1 0 2 .89 2 1.99v13.17l-2-2V6H8.83zm11.66 15.9a.996.996 0 0 1-1.41 0l-.2-.2c-.3.75-1.03 1.3-1.88 1.3H7c-1.1 0-2-.9-2-2V7.83l-2.9-2.9a.996.996 0 1 1 1.41-1.41l16.97 16.97c.4.39.4 1.02.01 1.41zM15.17 18 7 9.83V18h8.17z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M21.19 21.19 2.81 2.81 1.39 4.22 5 7.83V23h14v-1.17l.78.78 1.41-1.42zM7 18V9.83L15.17 18H7zM8.83 6 5 2.17V1h14v15.17l-2-2V6H8.83z"
    />
  {:else if variation === 'two-tone'}
    <path d="M7 21h10v-1H7v1zM7 3v1h10V3H7z" opacity=".3" /><path
      d="M17 6v8.17l2 2V3c0-1.1-.9-1.99-2-1.99L7 1c-.85 0-1.58.55-1.87 1.3L8.83 6H17zM7 3h10v1H7V3zm14.19 18.19L2.81 2.81 1.39 4.22 5 7.83V21c0 1.1.9 2 2 2h10c.85 0 1.58-.55 1.87-1.3l.91.91 1.41-1.42zM17 21H7v-1h10v1zM7 18V9.83L15.17 18H7z"
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
@prop export let ariaLabel = 'no cell';
-->
