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

  export let ariaLabel = 'cases';
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
    <path d="M3 9H1v11c0 1.11.89 2 2 2h17v-2H3V9z" /><path
      d="M18 5V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9z"
    />
  {:else if variation === 'filled'}
    <path
      d="M18 6V4l-2-2h-5L9 4v2H5v11s1 2 2 2h13s2-.98 2-2V6h-4zM4 9H2v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H4V9zm7-4c0-.55.53-1 1-1h3c.46 0 1 .54 1 1v1h-5V5zM5 6h17v11c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6z"
    />
  {:else if variation === 'round'}
    <path
      d="M18 5V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3zm-2 0h-4V3h4v2zM2 9c-.55 0-1 .45-1 1v10c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H3V10c0-.55-.45-1-1-1z"
    />
  {:else if variation === 'sharp'}
    <path d="M18 5V1h-8v4H5v13h18V5h-5zm-2 0h-4V3h4v2zM3 9H1v13h18v-2H3V9z" />
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
@prop export let ariaLabel = 'cases';
-->
