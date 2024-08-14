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

  export let ariaLabel = 'balance';
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
      d="M13 7.83c.85-.3 1.53-.98 1.83-1.83H18l-3 7c0 1.66 1.57 3 3.5 3s3.5-1.34 3.5-3l-3-7h2V4h-6.17c-.41-1.17-1.52-2-2.83-2s-2.42.83-2.83 2H3v2h2l-3 7c0 1.66 1.57 3 3.5 3S9 14.66 9 13L6 6h3.17c.3.85.98 1.53 1.83 1.83V19H2v2h20v-2h-9V7.83zM20.37 13h-3.74l1.87-4.36L20.37 13zm-13 0H3.63L5.5 8.64 7.37 13zM12 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
  {:else if variation === 'filled'}
    <path
      d="M13 7.83c.85-.3 1.53-.98 1.83-1.83H18l-3 7c0 1.66 1.57 3 3.5 3s3.5-1.34 3.5-3l-3-7h2V4h-6.17c-.41-1.17-1.52-2-2.83-2s-2.42.83-2.83 2H3v2h2l-3 7c0 1.66 1.57 3 3.5 3S9 14.66 9 13L6 6h3.17c.3.85.98 1.53 1.83 1.83V19H2v2h20v-2h-9V7.83zM20.37 13h-3.74l1.87-4.36L20.37 13zm-13 0H3.63L5.5 8.64 7.37 13zM12 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
  {:else if variation === 'round'}
    <path
      d="M13 19V7.83c.85-.3 1.53-.98 1.83-1.83H18l-2.78 6.49c-.17.39-.23.84-.11 1.25.39 1.3 1.76 2.26 3.39 2.26s3.01-.96 3.39-2.26c.12-.41.06-.86-.11-1.25L19 6h1c.55 0 1-.45 1-1s-.45-1-1-1h-5.17c-.41-1.17-1.52-2-2.83-2s-2.42.83-2.83 2H4c-.55 0-1 .45-1 1s.45 1 1 1h1l-2.78 6.49c-.17.39-.23.84-.11 1.25C2.49 15.04 3.87 16 5.5 16s3.01-.96 3.39-2.26c.12-.41.06-.86-.11-1.25L6 6h3.17c.3.85.98 1.53 1.83 1.83V19m0 0H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-8m7.37-6h-3.74l1.87-4.36L20.37 13zm-13 0H3.63L5.5 8.64 7.37 13zM12 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M13 7.83c.85-.3 1.53-.98 1.83-1.83H18l-3 7c0 1.66 1.57 3 3.5 3s3.5-1.34 3.5-3l-3-7h2V4h-6.17c-.41-1.17-1.52-2-2.83-2s-2.42.83-2.83 2H3v2h2l-3 7c0 1.66 1.57 3 3.5 3S9 14.66 9 13L6 6h3.17c.3.85.98 1.53 1.83 1.83V19H2v2h20v-2h-9V7.83zM20.37 13h-3.74l1.87-4.36L20.37 13zm-13 0H3.63L5.5 8.64 7.37 13zM12 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
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
@prop export let ariaLabel = 'balance';
-->
