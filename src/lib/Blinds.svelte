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

  export let ariaLabel = 'blinds';
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
      d="M20 19V3H4v16H2v2h20v-2h-2zM16 9h2v2h-2V9zm-2 2H6V9h8v2zm4-4h-2V5h2v2zm-4-2v2H6V5h8zM6 19v-6h8v1.82A1.746 1.746 0 0 0 15 18a1.746 1.746 0 0 0 1-3.18V13h2v6H6z"
    />
  {:else if variation === 'filled'}
    <path
      d="M20 19V3H4v16H2v2h20v-2h-2zM16 9h2v2h-2V9zm-2 2H6V9h8v2zm4-4h-2V5h2v2zm-4-2v2H6V5h8zM6 19v-6h8v1.82A1.746 1.746 0 0 0 15 18a1.746 1.746 0 0 0 1-3.18V13h2v6H6z"
    />
  {:else if variation === 'round'}
    <path
      d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1zM16 9h2v2h-2V9zm-2 2H6V9h8v2zm4-4h-2V5h2v2zm-4-2v2H6V5h8zM6 19v-6h8v1.82A1.746 1.746 0 0 0 15 18a1.746 1.746 0 0 0 1-3.18V13h2v6H6z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M20 19V3H4v16H2v2h20v-2h-2zM16 9h2v2h-2V9zm-2 2H6V9h8v2zm4-4h-2V5h2v2zm-4-2v2H6V5h8zM6 19v-6h8v1.82A1.746 1.746 0 0 0 15 18a1.746 1.746 0 0 0 1-3.18V13h2v6H6z"
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
@prop export let ariaLabel = 'blinds';
-->
