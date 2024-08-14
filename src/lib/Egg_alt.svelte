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

  export let ariaLabel = 'egg alt';
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
      d="M19 9c-2-2-3.01-7-9.03-7C4.95 2 1.94 6 2 11.52 2.06 17.04 6.96 19 9.97 19c2.01 0 2.01 3 6.02 3C19 22 22 19 22 15.02 22 12 21.01 11 19 9zm-3.01 11c-1.49 0-1.96-.5-2.68-1.26-.65-.69-1.65-1.74-3.34-1.74-1.64 0-5.92-.99-5.97-5.5-.03-2.51.68-4.62 1.99-5.95C7.01 4.52 8.35 4 9.97 4c3.34 0 4.51 1.86 5.86 4.02.55.88 1.07 1.71 1.76 2.39 1.9 1.89 2.41 2.4 2.41 4.61 0 2.85-2.12 4.98-4.01 4.98z"
    /><circle cx="12" cy="12" r="3.5" />
  {:else if variation === 'filled'}
    <path
      d="M19 9c-2-2-3.01-7-9.03-7C4.95 2 1.94 6 2 11.52 2.06 17.04 6.96 19 9.97 19c2.01 0 2.01 3 6.02 3C19 22 22 19 22 15.02 22 12 21.01 11 19 9zm-7 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
    />
  {:else if variation === 'round'}
    <path
      d="M19 9c-2-2-3.01-7-9.03-7C4.95 2 1.94 6 2 11.52 2.06 17.04 6.96 19 9.97 19c2.01 0 2.01 3 6.02 3C19 22 22 19 22 15.02 22 12 21.01 11 19 9zm-7 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M19 9c-2-2-3.01-7-9.03-7C4.95 2 1.94 6 2 11.52 2.06 17.04 6.96 19 9.97 19c2.01 0 2.01 3 6.02 3C19 22 22 19 22 15.02 22 12 21.01 11 19 9zm-7 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
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
@prop export let ariaLabel = 'egg alt';
-->
