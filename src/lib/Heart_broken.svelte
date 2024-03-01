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
    '<path d="M16.5 3c-.96 0-1.9.25-2.73.69L12 9h3l-3 10 1-9h-3l1.54-5.39C10.47 3.61 9.01 3 7.5 3 4.42 3 2 5.42 2 8.5c0 4.13 4.16 7.18 10 12.5 5.47-4.94 10-8.26 10-12.5C22 5.42 19.58 3 16.5 3z"/>';
  let svgoutlined =
    '<path d="M16.5 3c-.96 0-1.9.25-2.73.69L12 9h3l-3 10 1-9h-3l1.54-5.39C10.47 3.61 9.01 3 7.5 3 4.42 3 2 5.42 2 8.5c0 4.13 4.16 7.18 10 12.5 5.47-4.94 10-8.26 10-12.5C22 5.42 19.58 3 16.5 3zm-6.26 13.73C6.45 13.34 4 11 4 8.5 4 6.54 5.54 5 7.5 5c.59 0 1.19.15 1.73.42L7.35 12h3.42l-.53 4.73zm4.89-1.2L17.69 7h-2.91l.61-1.82c.36-.12.74-.18 1.11-.18C18.46 5 20 6.54 20 8.5c0 2.21-2.02 4.43-4.87 7.03z"/>';
  let svground =
    '<path d="M19.57 3.95c-1.92-1.29-4.08-1.17-5.8-.26L12 9h1.66c.67 0 1.15.65.96 1.29l-1.82 6.07c-.09.29-.52.2-.49-.1L13 10h-1.67c-.66 0-1.14-.64-.96-1.27l1.18-4.11c-1.85-1.73-4.84-2.3-7.28-.58C2.82 5.07 2 6.7 2 8.49c-.01 3.81 3.53 6.71 8.66 11.3.76.68 1.92.69 2.69.01 4.98-4.42 8.87-7.58 8.64-11.62-.09-1.73-.99-3.26-2.42-4.23z"/>';
  let svgsharp =
    '<path d="M16.5 3c-.96 0-1.9.25-2.73.69L12 9h3l-3 10 1-9h-3l1.54-5.39C10.47 3.61 9.01 3 7.5 3 4.42 3 2 5.42 2 8.5c0 4.13 4.16 7.18 10 12.5 5.47-4.94 10-8.26 10-12.5C22 5.42 19.58 3 16.5 3z"/>';
  let svgtwotone =
    '<path d="M9.23 5.42C8.69 5.15 8.09 5 7.5 5 5.54 5 4 6.54 4 8.5c0 2.5 2.45 4.84 6.24 8.23l.53-4.73H7.35l1.88-6.58zM16.5 5c-.37 0-.75.06-1.12.18L14.77 7h2.91l-2.56 8.53C17.98 12.93 20 10.71 20 8.5 20 6.54 18.46 5 16.5 5z" opacity=".3"/><path d="M16.5 3c-.96 0-1.9.25-2.73.69L12 9h3l-3 10 1-9h-3l1.54-5.39C10.47 3.61 9.01 3 7.5 3 4.42 3 2 5.42 2 8.5c0 4.13 4.16 7.18 10 12.5 5.47-4.94 10-8.26 10-12.5C22 5.42 19.58 3 16.5 3zm-6.26 13.73C6.45 13.34 4 11 4 8.5 4 6.54 5.54 5 7.5 5c.59 0 1.19.15 1.73.42L7.35 12h3.42l-.53 4.73zm4.89-1.2L17.69 7h-2.91l.61-1.82c.36-.12.74-.18 1.11-.18C18.46 5 20 6.54 20 8.5c0 2.21-2.02 4.43-4.87 7.03z"/>';
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
  export let ariaLabel = 'heart broken';
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
@prop export let ariaLabel = 'heart broken';
-->
