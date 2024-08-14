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

  export let ariaLabel = 'brightness 3';
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
      d="M12.7 4.91A8 8 0 0 1 17 12a8 8 0 0 1-4.3 7.09c1.46-2 2.3-4.46 2.3-7.09s-.84-5.09-2.3-7.09M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54s-2.94 8.27-7 9.54c.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"
    />
  {:else if variation === 'filled'}
    <path
      d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"
    />
  {:else if variation === 'round'}
    <path
      d="M8.93 2h-.14c-.83.02-1.09 1.12-.39 1.56A9.994 9.994 0 0 1 13.03 12c0 3.55-1.84 6.66-4.62 8.43-.71.46-.43 1.55.41 1.57h.21c6.05 0 10.86-5.39 9.87-11.63-.76-4.84-5.07-8.42-9.97-8.37z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54s-2.94 8.27-7 9.54c.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M12.7 4.91c1.46 2 2.3 4.46 2.3 7.09s-.84 5.09-2.3 7.09A8 8 0 0 0 17 12a8 8 0 0 0-4.3-7.09z"
      opacity=".3"
    /><path
      d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2zm3.7 17.09c1.46-2 2.3-4.46 2.3-7.09s-.84-5.09-2.3-7.09A8 8 0 0 1 17 12a8 8 0 0 1-4.3 7.09z"
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
@prop export let ariaLabel = 'brightness 3';
-->
