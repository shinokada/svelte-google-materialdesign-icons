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

  export let ariaLabel = 'wb auto';
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
      d="m7 7-3.2 9h1.9l.7-2h3.2l.7 2h1.9L9 7H7zm-.15 5.65L8 9l1.15 3.65h-2.3zM22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76l-.01.01C12.76 5.18 10.53 4 8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c2.96 0 5.55-1.61 6.93-4 .03-.06.05-.12.08-.18.05-.08.09-.17.14-.25l.1.43H17l1.5-6.1L20 16h1.75l2.05-9H22zm-8.63 7.67C12.38 16.64 10.35 18 8 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6c0 .96-.23 1.86-.63 2.67z"
    />
  {:else if variation === 'filled'}
    <path
      d="M6.85 12.65h2.3L8 9l-1.15 3.65zM22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76C12.77 5.17 10.53 4 8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c3.13 0 5.84-1.81 7.15-4.43l.1.43H17l1.5-6.1L20 16h1.75l2.05-9H22zm-11.7 9-.7-2H6.4l-.7 2H3.8L7 7h2l3.2 9h-1.9z"
    />
  {:else if variation === 'round'}
    <path
      d="M6.85 12.65h2.3L8 9zM22.72 7c-.42 0-.77.3-.85.7l-1.07 5.59-1.31-5.51c-.11-.46-.52-.78-.99-.78s-.88.32-.98.78l-1.31 5.51-1.07-5.59c-.08-.4-.44-.7-.85-.7-.01 0-.03.01-.04.01A7.998 7.998 0 0 0 0 12c0 4.42 3.58 8 8 8 3.17 0 5.9-1.85 7.2-4.52a1.104 1.104 0 0 0 2.01-.32L18.5 9.9l1.29 5.26c.12.49.57.84 1.07.84.52 0 .96-.36 1.08-.86l1.61-7.08A.859.859 0 0 0 22.72 7zm-11.79 9c-.38 0-.72-.24-.84-.6L9.6 14H6.4l-.49 1.4c-.13.36-.46.6-.84.6a.888.888 0 0 1-.84-1.19l2.44-6.86C6.87 7.38 7.4 7 8 7s1.13.38 1.34.94l2.44 6.86c.2.59-.23 1.2-.85 1.2z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M6.85 12.65h2.3L8 9l-1.15 3.65zM22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76C12.77 5.17 10.53 4 8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c3.13 0 5.84-1.81 7.15-4.43l.1.43H17l1.5-6.1L20 16h1.75l2.05-9H22zm-11.7 9-.7-2H6.4l-.7 2H3.8L7 7h2l3.2 9h-1.9z"
    />
  {:else if variation === 'two-tone'}
    replace_svg_two
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
@prop export let ariaLabel = 'wb auto';
-->
