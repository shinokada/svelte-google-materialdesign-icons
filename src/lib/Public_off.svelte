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

  export let ariaLabel = 'public off';
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
      d="M11 8.17 6.49 3.66A9.91 9.91 0 0 1 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46A7.842 7.842 0 0 0 20 12c0-3.35-2.07-6.22-5-7.41V5c0 1.1-.9 2-2 2h-2v1.17zm10.19 13.02-1.41 1.41-2.27-2.27A9.839 9.839 0 0 1 12 22C6.48 22 2 17.52 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81l18.39 18.38zM11 18c-1.1 0-2-.9-2-2v-1l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.08 3.05 7.44 7 7.93V18z"
    />
  {:else if variation === 'filled'}
    <path
      d="M11 8.17 6.49 3.66A9.91 9.91 0 0 1 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46A7.842 7.842 0 0 0 20 12c0-3.35-2.07-6.22-5-7.41V5c0 1.1-.9 2-2 2h-2v1.17zm10.19 13.02-1.41 1.41-2.27-2.27A9.839 9.839 0 0 1 12 22C6.48 22 2 17.52 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81l18.39 18.38zM11 18c-1.1 0-2-.9-2-2v-1l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.08 3.05 7.44 7 7.93V18z"
    />
  {:else if variation === 'round'}
    <path
      d="M11 8.17 6.49 3.66A9.91 9.91 0 0 1 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46A7.842 7.842 0 0 0 20 12c0-3.35-2.07-6.22-5-7.41V5c0 1.1-.9 2-2 2h-2v1.17zm9.49 13.73a.996.996 0 0 1-1.41 0l-1.56-1.56c-2.07 1.37-4.68 2-7.45 1.48-3.95-.75-7.13-3.92-7.88-7.88-.52-2.77.1-5.38 1.48-7.45L2.1 4.93a.996.996 0 1 1 1.41-1.41l16.97 16.97c.4.39.4 1.02.01 1.41zM11 18c-1.1 0-2-.9-2-2v-1l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.08 3.05 7.44 7 7.93V18z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M11 8.17 6.49 3.66A9.91 9.91 0 0 1 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46A7.842 7.842 0 0 0 20 12c0-3.35-2.07-6.22-5-7.41V5c0 1.1-.9 2-2 2h-2v1.17zm10.19 13.02-1.41 1.41-2.27-2.27A9.839 9.839 0 0 1 12 22C6.48 22 2 17.52 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81l18.39 18.38zM11 18c-1.1 0-2-.9-2-2v-1l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.08 3.05 7.44 7 7.93V18z"
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
@prop export let ariaLabel = 'public off';
-->
