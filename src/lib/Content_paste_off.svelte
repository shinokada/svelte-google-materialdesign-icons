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

  export let ariaLabel = 'content paste off';
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
      d="M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.42zM5 19V7.83L16.17 19H5zM17 8V5h2v11.17l2 2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5H17zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
    />
  {:else if variation === 'filled'}
    <path
      d="M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.42zM5 19V7.83L16.17 19H5zM17 8V5h2v11.17l2 2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5H17zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
    />
  {:else if variation === 'round'}
    <path
      d="M20.49 20.49 3.51 3.51A.996.996 0 1 0 2.1 4.92l.9.91V19c0 1.1.9 2 2 2h13.17l.9.9c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41zM5 19V7.83L16.17 19H5zM17 8V5h2v11.17l2 2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5H17zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V21h15.17l1.61 1.61 1.41-1.42zM5 19V7.83L16.17 19H5zM17 8V5h2v11.17l2 2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5H17zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
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
@prop export let ariaLabel = 'content paste off';
-->
