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
    '<path d="M17.06 11.57c.59-.69.94-1.59.94-2.57 0-1.86-1.27-3.43-3-3.87V3h-2v2h-2V3H9v2H6v2h2v10H6v2h3v2h2v-2h2v2h2v-2c2.21 0 4-1.79 4-4 0-1.45-.78-2.73-1.94-3.43zM10 7h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4V7zm5 10h-5v-4h5c1.1 0 2 .9 2 2s-.9 2-2 2z"/>';
  let svgoutlined =
    '<path d="M17.06 11.57c.59-.69.94-1.59.94-2.57 0-1.86-1.27-3.43-3-3.87V3h-2v2h-2V3H9v2H6v2h2v10H6v2h3v2h2v-2h2v2h2v-2c2.21 0 4-1.79 4-4 0-1.45-.78-2.73-1.94-3.43zM10 7h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4V7zm5 10h-5v-4h5c1.1 0 2 .9 2 2s-.9 2-2 2z"/>';
  let svground =
    '<path d="M10 7h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4V7zm5 10h-5v-4h5c1.1 0 2 .9 2 2s-.9 2-2 2zm0-13c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v10H7c-.55 0-1 .45-1 1s.45 1 1 1h2v1c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1v-1c2.21 0 4-1.79 4-4 0-1.45-.78-2.73-1.94-3.43.59-.69.94-1.59.94-2.57 0-1.86-1.27-3.43-3-3.87V4z"/>';
  let svgsharp =
    '<path d="M17.06 11.57c.59-.69.94-1.59.94-2.57 0-1.86-1.27-3.43-3-3.87V3h-2v2h-2V3H9v2H6v2h2v10H6v2h3v2h2v-2h2v2h2v-2c2.21 0 4-1.79 4-4 0-1.45-.78-2.73-1.94-3.43zM10 7h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4V7zm5 10h-5v-4h5c1.1 0 2 .9 2 2s-.9 2-2 2z"/>';
  let svgtwotone =
    '<path d="M17.06 11.57c.59-.69.94-1.59.94-2.57 0-1.86-1.27-3.43-3-3.87V3h-2v2h-2V3H9v2H6v2h2v10H6v2h3v2h2v-2h2v2h2v-2c2.21 0 4-1.79 4-4 0-1.45-.78-2.73-1.94-3.43zM10 7h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4V7zm5 10h-5v-4h5c1.1 0 2 .9 2 2s-.9 2-2 2z"/>';
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
  export let ariaLabel = 'currency bitcoin';
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
@prop export let ariaLabel = 'currency bitcoin';
-->
