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

  export let ariaLabel = 'key off';
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
      d="m10.7 13.53-1.71-1.71c.01.06.01.12.01.18 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.06 0 .12 0 .18.01L5.47 8.3C4.02 8.9 3 10.33 3 12c0 2.21 1.79 4 4 4 1.67 0 3.1-1.02 3.7-2.47zm1.49 1.49A6.012 6.012 0 0 1 7 18c-3.31 0-6-2.69-6-6 0-2.21 1.2-4.15 2.98-5.19L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41-7.58-7.58zm4.07-1.59 1.24-.93 1.81 1.36L21.17 12l-1-1h-6.34l-2-2H21l3 3-4.5 4.5-.69-.51-2.55-2.56z"
    />
  {:else if variation === 'filled'}
    <path
      d="M16.91 14.09 17 14l2 2 4-4.04L21 10h-8.17l4.08 4.09zM3.98 6.81A6.012 6.012 0 0 0 1 12c0 3.31 2.69 6 6 6 2.21 0 4.15-1.2 5.18-2.99l7.59 7.59 1.41-1.41L2.81 2.81 1.39 4.22l2.59 2.59zm5.93 5.93A3.015 3.015 0 0 1 7 15c-1.65 0-3-1.35-3-3 0-1.4.97-2.58 2.26-2.91l3.65 3.65z"
    />
  {:else if variation === 'round'}
    <path
      d="m12.83 10 4.09 4.09L17 14l1.29 1.29c.39.39 1.03.39 1.42 0l2.59-2.61a.999.999 0 0 0-.01-1.42l-.99-.97c-.2-.19-.45-.29-.71-.29h-7.76zm6.24 11.9a.996.996 0 1 0 1.41-1.41L3.51 3.51A.996.996 0 1 0 2.1 4.92L3.98 6.8A6.041 6.041 0 0 0 1 12c0 3.31 2.69 6 6 6 2.21 0 4.15-1.2 5.18-2.99l6.89 6.89zm-9.16-9.16A3.015 3.015 0 0 1 7 15c-1.65 0-3-1.35-3-3 0-1.4.97-2.58 2.26-2.91l3.65 3.65z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M16.91 14.09 17 14l2 2 4-4.04L21 10h-8.17l4.08 4.09zM3.98 6.81A6.012 6.012 0 0 0 1 12c0 3.31 2.69 6 6 6 2.21 0 4.15-1.2 5.18-2.99l7.59 7.59 1.41-1.41L2.81 2.81 1.39 4.22l2.59 2.59zm5.93 5.93A3.015 3.015 0 0 1 7 15c-1.65 0-3-1.35-3-3 0-1.4.97-2.58 2.26-2.91l3.65 3.65z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="m10.7 13.53-1.71-1.71c.01.06.01.12.01.18 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.06 0 .12 0 .18.01L5.47 8.3C4.02 8.9 3 10.33 3 12c0 2.21 1.79 4 4 4 1.67 0 3.1-1.02 3.7-2.47zm5.56-.1 1.24-.93 1.81 1.36L21.17 12l-1-1h-6.34l2.43 2.43z"
      opacity=".3"
    /><path
      d="m10.7 13.53-1.71-1.71c.01.06.01.12.01.18 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.06 0 .12 0 .18.01L5.47 8.3C4.02 8.9 3 10.33 3 12c0 2.21 1.79 4 4 4 1.67 0 3.1-1.02 3.7-2.47zm1.49 1.49A6.012 6.012 0 0 1 7 18c-3.31 0-6-2.69-6-6 0-2.21 1.2-4.15 2.98-5.19L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41-7.58-7.58zm4.07-1.59 1.24-.93 1.81 1.36L21.17 12l-1-1h-6.34l-2-2H21l3 3-4.5 4.5-.69-.51-2.55-2.56z"
    />
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
@prop export let ariaLabel = 'key off';
-->
