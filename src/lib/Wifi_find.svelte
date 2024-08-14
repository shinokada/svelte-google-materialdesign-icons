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

  export let ariaLabel = 'wifi find';
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
      d="M12 6c4.14 0 7.88 1.68 10.59 4.39L24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98L12 21l1.41-1.42L2.93 9.08C5.45 7.16 8.59 6 12 6z"
    /><path
      d="M21 14c0-2.24-1.76-4-4-4s-4 1.76-4 4 1.76 4 4 4c.75 0 1.44-.21 2.03-.56L21.59 20 23 18.59l-2.56-2.56c.35-.59.56-1.28.56-2.03zm-4 2c-1.12 0-2-.88-2-2s.88-2 2-2 2 .88 2 2-.88 2-2 2z"
    />
  {:else if variation === 'filled'}
    <path
      d="M11 14c0-3.36 2.64-6 6-6 2.2 0 4.08 1.13 5.13 2.86L24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98L12 21l1.86-1.87C12.14 18.09 11 16.2 11 14z"
    /><path
      d="M21 14c0-2.24-1.76-4-4-4s-4 1.76-4 4 1.76 4 4 4c.75 0 1.44-.21 2.03-.56L21.59 20 23 18.59l-2.56-2.56c.35-.59.56-1.28.56-2.03zm-6 0c0-1.12.88-2 2-2s2 .88 2 2-.88 2-2 2-2-.88-2-2z"
    />
  {:else if variation === 'round'}
    <path
      d="M11 14c0-3.36 2.64-6 6-6 2.2 0 4.08 1.13 5.13 2.86l.36-.37c.86-.86.76-2.27-.2-3.01A16.887 16.887 0 0 0 12 4C8.13 4 4.56 5.3 1.71 7.48c-.96.74-1.06 2.15-.2 3.01l9.08 9.09c.78.78 2.05.78 2.83 0l.45-.45C12.14 18.09 11 16.2 11 14z"
    /><path
      d="M20.44 16.03c.35-.59.56-1.28.56-2.03 0-2.24-1.76-4-4-4s-4 1.76-4 4 1.76 4 4 4c.75 0 1.44-.21 2.03-.56l1.85 1.85a.996.996 0 1 0 1.41-1.41l-1.85-1.85zM17 16c-1.12 0-2-.88-2-2s.88-2 2-2 2 .88 2 2-.88 2-2 2z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M11 14c0-3.36 2.64-6 6-6 2.2 0 4.08 1.13 5.13 2.86L24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98L12 21l1.86-1.87C12.14 18.09 11 16.2 11 14z"
    /><path
      d="M21 14c0-2.24-1.76-4-4-4s-4 1.76-4 4 1.76 4 4 4c.75 0 1.44-.21 2.03-.56L21.59 20 23 18.59l-2.56-2.56c.35-.59.56-1.28.56-2.03zm-6 0c0-1.12.88-2 2-2s2 .88 2 2-.88 2-2 2-2-.88-2-2z"
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
@prop export let ariaLabel = 'wifi find';
-->
