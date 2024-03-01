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
    '<path d="M13 3a9 9 0 0 0-9 9H1l4 4 4-4H6c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7c-1.9 0-3.62-.76-4.88-1.99L6.7 18.42A8.982 8.982 0 0 0 13 21a9 9 0 0 0 0-18zm2 8v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"/>';
  let svgoutlined =
    '<path d="M13 3a9 9 0 0 0-9 9c0 .06.01.12.01.19l-1.84-1.84-1.41 1.41L5 16l4.24-4.24-1.41-1.41-1.82 1.82c0-.06-.01-.11-.01-.17 0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7c-1.9 0-3.62-.76-4.88-1.99L6.7 18.42A8.982 8.982 0 0 0 13 21a9 9 0 0 0 0-18zm2 8v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"/>';
  let svground =
    '<path d="M13.26 3A9.003 9.003 0 0 0 4 12H2.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.8-2.79c.3-.31.08-.85-.37-.85H6c0-3.89 3.2-7.06 7.1-7 3.71.05 6.84 3.18 6.9 6.9.06 3.91-3.1 7.1-7 7.1-1.59 0-3.05-.53-4.23-1.43-.4-.3-.96-.27-1.31.09-.43.43-.39 1.14.09 1.5A8.971 8.971 0 0 0 13 21c5.06 0 9.14-4.17 9-9.25-.13-4.7-4.05-8.62-8.74-8.75zM15 11v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"/>';
  let svgsharp =
    '<path d="M13 3a9 9 0 0 0-9 9H1l4 4 4-4H6c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7c-1.9 0-3.62-.76-4.88-1.99L6.7 18.42A8.982 8.982 0 0 0 13 21a9 9 0 0 0 0-18zm2 8v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1h-1v5h6v-5h-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"/>';
  let svgtwotone =
    '<path d="M13 3a9 9 0 0 0-9 9H1l4 4 4-4H6c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7c-1.9 0-3.62-.76-4.88-1.99L6.7 18.42A8.982 8.982 0 0 0 13 21a9 9 0 0 0 0-18zm2 8v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"/>';
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
  export let ariaLabel = 'lock reset';
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
@prop export let ariaLabel = 'lock reset';
-->
