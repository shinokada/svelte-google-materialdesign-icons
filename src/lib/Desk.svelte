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

  export let ariaLabel = 'desk';
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
    <path d="M2 6v12h2V8h10v10h2v-2h4v2h2V6H2zm18 2v2h-4V8h4zm-4 6v-2h4v2h-4z" />
  {:else if variation === 'filled'}
    <path d="M2 6v12h2V8h10v10h2v-2h4v2h2V6H2zm18 2v2h-4V8h4zm-4 6v-2h4v2h-4z" />
  {:else if variation === 'round'}
    <path
      d="M2 7v10c0 .55.45 1 1 1s1-.45 1-1V8h10v9c0 .55.45 1 1 1s1-.45 1-1v-1h4v1c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1zm18 1v2h-4V8h4zm-4 6v-2h4v2h-4z"
    />
  {:else if variation === 'sharp'}
    <path d="M2 6v12h2V8h10v10h2v-2h4v2h2V6H2zm18 2v2h-4V8h4zm-4 6v-2h4v2h-4z" />
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
@prop export let ariaLabel = 'desk';
-->
