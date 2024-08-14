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

  export let ariaLabel = 'compass calibration';
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
      d="M12 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-17C8.1 3 4.56 4.59 2 7.15l5 5a7.06 7.06 0 0 1 10-.01l5-5C19.44 4.59 15.9 3 12 3zm4.84 6.47c-1.44-.91-3.1-1.4-4.84-1.4-1.74 0-3.41.49-4.85 1.41L4.94 7.26C6.99 5.79 9.44 5 12 5c2.56 0 5 .79 7.05 2.26l-2.21 2.21z"
    />
  {:else if variation === 'filled'}
    <circle cx="12" cy="17" r="4" /><path
      d="M12 10.07c1.95 0 3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3S4.56 4.59 2 7.15l5 5a7.06 7.06 0 0 1 5-2.08z"
    />
  {:else if variation === 'round'}
    <circle cx="12" cy="17" r="4" /><path
      d="M12 3C8.49 3 5.28 4.29 2.8 6.41a1.01 1.01 0 0 0-.06 1.48l3.6 3.6c.36.36.92.39 1.32.08 1.2-.94 2.71-1.5 4.34-1.5 1.64 0 3.14.56 4.34 1.49.4.31.96.28 1.31-.08l3.6-3.6c.42-.42.38-1.1-.07-1.48C18.72 4.28 15.51 3 12 3z"
    />
  {:else if variation === 'sharp'}
    <circle cx="12" cy="17" r="4" /><path
      d="M12 3C8.1 3 4.56 4.59 2 7.15l5 5a7.06 7.06 0 0 1 10-.01l5-5C19.44 4.59 15.9 3 12 3z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="m4.94 7.26 2.21 2.21A9.05 9.05 0 0 1 12 8.07c1.74 0 3.41.49 4.84 1.4l2.21-2.21A12.037 12.037 0 0 0 12 5c-2.56 0-5.01.79-7.06 2.26z"
      opacity=".3"
    /><circle cx="12" cy="17" r="3" opacity=".3" /><path
      d="M17 17c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5zm-8 0c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zM2 7.15l5 5a7.06 7.06 0 0 1 10-.01l5-5C19.44 4.59 15.9 3 12 3 8.1 3 4.56 4.59 2 7.15zm14.84 2.32c-1.44-.91-3.1-1.4-4.84-1.4-1.74 0-3.41.49-4.85 1.41L4.94 7.26C6.99 5.79 9.44 5 12 5c2.56 0 5 .79 7.05 2.26l-2.21 2.21z"
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
@prop export let ariaLabel = 'compass calibration';
-->
