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

  export let ariaLabel = 'wb shade';
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
    <path d="M14 12v2.5l5.5 5.5H22l-8-8zm0 8h3l-3-3v3zM8 4l-6 6h2v10h8V10h2L8 4zm1 10H7v-4h2v4z" />
  {:else if variation === 'filled'}
    <path d="M14 12v2.5l5.5 5.5H22zm0 8h3l-3-3zM8 4l-6 6h2v10h8V10h2L8 4zm1 10H7v-4h2v4z" />
  {:else if variation === 'round'}
    <path
      d="M14 14.13c0 .23.09.46.26.63l4.98 4.98c.17.17.39.26.62.26.79 0 1.18-.95.62-1.51l-4.98-4.98c-.55-.56-1.5-.16-1.5.62zM15 20h2l-3-3v2c0 .55.45 1 1 1zM7.65 4.35l-4.8 4.8a.5.5 0 0 0 .36.85H4v9c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-9h.79c.45 0 .67-.54.35-.85l-4.79-4.8a.501.501 0 0 0-.7 0zM9 14H7v-4h2v4z"
    />
  {:else if variation === 'sharp'}
    <path d="M14 12v2.5l5.5 5.5H22l-8-8zm0 8h3l-3-3v3zM8 4l-6 6h2v10h8V10h2L8 4zm1 10H7v-4h2v4z" />
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
@prop export let ariaLabel = 'wb shade';
-->
