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

  export let ariaLabel = 'sim card download';
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
      d="M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 2v16H6V8.83L10.83 4H18z"
    /><path d="m16 13-4 4-4-4 1.41-1.41L11 13.17V9.02L13 9v4.17l1.59-1.59L16 13z" />
  {:else if variation === 'filled'}
    <path
      d="M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 15-4-4h3V9.02L13 9v4h3l-4 4z"
    />
  {:else if variation === 'round'}
    <path
      d="M18 2h-7.17c-.53 0-1.04.21-1.42.59L4.59 7.41C4.21 7.79 4 8.3 4 8.83V20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6.35 14.65-2.79-2.79c-.32-.32-.1-.86.35-.86H11v-2.99a1 1 0 0 1 .99-1 .993.993 0 0 1 1.01 1V13h1.79c.45 0 .67.54.35.85l-2.79 2.79c-.19.2-.51.2-.7.01z"
    />
  {:else if variation === 'sharp'}
    <path d="M20 2H10L4 8v14h16V2zm-8 15-4-4h3V9.02L13 9v4h3l-4 4z" />
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
@prop export let ariaLabel = 'sim card download';
-->
