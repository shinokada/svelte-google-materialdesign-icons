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

  let svgpath: string;
  let svgfilled =
    '<path d="m17 17 5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z"/><path d="M19 19H5V5h14v2h2V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-2h-2v2z"/>';
  let svgoutlined =
    '<path d="m17 17 5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z"/><path d="M19 19H5V5h14v2h2V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-2h-2v2z"/>';
  let svground =
    '<path d="m17.71 16.29 3.59-3.59a.996.996 0 0 0 0-1.41L17.71 7.7a.996.996 0 1 0-1.41 1.41L18.17 11H10c-.55 0-1 .45-1 1s.45 1 1 1h8.17l-1.88 1.88a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.42 0z"/><path d="M19 19H5V5h14v1c0 .55.45 1 1 1s1-.45 1-1V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-1c0-.55-.45-1-1-1s-1 .45-1 1v1z"/>';
  let svgsharp =
    '<path d="m17 17 5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z"/><path d="M19 19H5V5h14v2h2V3H3v18h18v-4h-2z"/>';
  let svgtwotone =
    '<path d="m17 17 5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z"/><path d="M19 19H5V5h14v2h2V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-2h-2v2z"/>';
  switch (variation) {
    case 'filled':
      svgpath = svgfilled;
      break;
    case 'outlined':
      svgpath = svgoutlined;
      break;
    case 'round':
      svgpath = svground;
      break;
    case 'sharp':
      svgpath = svgsharp;
      break;
    case 'two-tone':
      svgpath = svgtwotone;
      break;
    default:
      svgpath = svgoutlined;
  }
  export let ariaLabel = 'output';
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
  {@html svgpath}
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
@prop export let ariaLabel = 'output';
-->
