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
    '<path d="M19 9c0-1.3-.84-2.4-2-2.82V2h-2v4.18C13.84 6.6 13 7.7 13 9s.84 2.4 2 2.82V15c0 2.21-1.79 4-4 4s-4-1.79-4-4v-1h3L5 9v6c0 3.31 2.69 6 6 6s6-2.69 6-6v-3.18c1.16-.42 2-1.52 2-2.82zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>';
  let svgoutlined =
    '<path d="M17 6.18V2h-2v4.18C13.84 6.6 13 7.7 13 9s.84 2.4 2 2.82V15c0 2.21-1.79 4-4 4s-4-1.79-4-4v-1.17l1.59 1.59L10 14 5 9v6c0 3.31 2.69 6 6 6s6-2.69 6-6v-3.18c1.16-.41 2-1.51 2-2.82s-.84-2.4-2-2.82zM16 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>';
  let svground =
    '<path d="M19 9c0-1.3-.84-2.4-2-2.82V3c0-.55-.45-1-1-1s-1 .45-1 1v3.18C13.84 6.6 13 7.7 13 9s.84 2.4 2 2.82v3.01c0 2.09-1.52 3.96-3.6 4.16C9.02 19.21 7 17.34 7 15v-1h1.79c.45 0 .67-.54.35-.85l-3.29-3.3a.5.5 0 0 0-.85.36v4.58c0 3.05 2.19 5.77 5.21 6.16C13.87 21.42 17 18.57 17 15v-3.18c1.16-.42 2-1.52 2-2.82zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>';
  let svgsharp =
    '<path d="M19 9c0-1.3-.84-2.4-2-2.82V2h-2v4.18C13.84 6.6 13 7.7 13 9s.84 2.4 2 2.82V15c0 2.21-1.79 4-4 4s-4-1.79-4-4v-1h3L5 9v6c0 3.31 2.69 6 6 6s6-2.69 6-6v-3.18c1.16-.42 2-1.52 2-2.82zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>';
  let svgtwotone =
    '<path d="M19 9c0-1.3-.84-2.4-2-2.82V2h-2v4.18C13.84 6.6 13 7.7 13 9s.84 2.4 2 2.82V15c0 2.21-1.79 4-4 4s-4-1.79-4-4v-1h3L5 9v6c0 3.31 2.69 6 6 6s6-2.69 6-6v-3.18c1.16-.42 2-1.52 2-2.82zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>';
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
  export let ariaLabel = 'phishing';
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
@prop export let ariaLabel = 'phishing';
-->
