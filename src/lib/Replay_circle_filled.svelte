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

  export let ariaLabel = 'replay circle filled';
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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16.5c-3.31 0-6-2.69-6-6h2c0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.24-1.85-4.09-4.16-3.99l1.57 1.57L12 11.5l-4-4 4-4 1.41 1.41-1.6 1.6C15.28 6.4 18 9.18 18 12.5c0 3.31-2.69 6-6 6z"
    />
  {:else if variation === 'filled'}
    <path
      fill-rule="evenodd"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6 10c0 3.31-2.69 6-6 6s-6-2.69-6-6h2c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4v3L8 7l4-4v3c3.31 0 6 2.69 6 6z"
    />
  {:else if variation === 'round'}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6 10.74c-.12 3.09-2.67 5.64-5.76 5.76a5.995 5.995 0 0 1-6.12-4.82c-.13-.61.36-1.18.98-1.18.47 0 .88.33.98.8a3.997 3.997 0 0 0 4.72 3.12c1.56-.3 2.82-1.56 3.12-3.12A4 4 0 0 0 12 8.5v1.79c0 .45-.54.67-.85.35l-2.8-2.79c-.2-.2-.2-.51 0-.71l2.79-2.79c.32-.31.86-.09.86.36V6.5a6.01 6.01 0 0 1 6 6.24z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6 10.5c0 3.31-2.69 6-6 6s-6-2.69-6-6h2c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4v3l-4-4 4-4v3c3.31 0 6 2.69 6 6z"
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
@prop export let ariaLabel = 'replay circle filled';
-->
