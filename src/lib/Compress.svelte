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

  export let ariaLabel = 'compress';
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
      d="M4 9v2h16V9H4zm12-5-1.41-1.41L13 4.17V1h-2v3.19L9.39 2.61 8 4l4 4 4-4zM4 14h16v-2H4v2zm4 5 1.39 1.39L11 18.81V22h2v-3.17l1.59 1.59L16 19l-4-4-4 4z"
    />
  {:else if variation === 'filled'}
    <path d="M8 19h3v3h2v-3h3l-4-4-4 4zm8-15h-3V1h-2v3H8l4 4 4-4zM4 9v2h16V9H4zm0 3h16v2H4z" />
  {:else if variation === 'round'}
    <path
      d="M4 10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1zm10.79-6H13V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9.21a.5.5 0 0 0-.36.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79c.32-.31.1-.85-.35-.85zM9.21 19H11v2c0 .55.45 1 1 1s1-.45 1-1v-2h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.2-.2-.51-.2-.71 0l-2.79 2.79a.5.5 0 0 0 .36.85zM5 14h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z"
    />
  {:else if variation === 'sharp'}
    <path d="M4 9h16v2H4zm12-5h-3V1h-2v3H8l4 4zM8 19h3v3h2v-3h3l-4-4zm-4-7h16v2H4z" />
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
@prop export let ariaLabel = 'compress';
-->
