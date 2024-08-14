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

  export let ariaLabel = 'currency franc';
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
    <path d="M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z" />
  {:else if variation === 'filled'}
    <path d="M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z" />
  {:else if variation === 'round'}
    <path
      d="M18 4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v12H6c-.55 0-1 .45-1 1s.45 1 1 1h1v2c0 .55.45 1 1 1s1-.45 1-1v-2h3c.55 0 1-.45 1-1s-.45-1-1-1H9v-3h7c.55 0 1-.45 1-1s-.45-1-1-1H9V5h8c.55 0 1-.45 1-1z"
    />
  {:else if variation === 'sharp'}
    <path d="M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z" />
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
@prop export let ariaLabel = 'currency franc';
-->
