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

  export let ariaLabel = 'rtt';
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
      d="m9.03 3-1.11 7.07h2.62l.7-4.5h2.58L11.8 18.43H9.47L9.06 21h7.27l.4-2.57h-2.35l2-12.86h2.58l-.71 4.5h2.65L22 3H9.03zM8 5H4l-.31 2h4L8 5zm-.61 4h-4l-.31 2h4l.31-2zm.92 8h-6L2 19h6l.31-2zm.62-4h-6l-.31 2h6.01l.3-2z"
    />
  {:else if variation === 'filled'}
    <path
      d="m9.03 3-1.11 7.07h2.62l.7-4.5h2.58L11.8 18.43H9.47L9.06 21h7.27l.4-2.57h-2.35l2-12.86h2.58l-.71 4.5h2.65L22 3H9.03zM8 5H4l-.31 2h4L8 5zm-.61 4h-4l-.31 2h4l.31-2zm.92 8h-6L2 19h6l.31-2zm.62-4h-6l-.31 2h6.01l.3-2z"
    />
  {:else if variation === 'round'}
    <path
      d="m8.76 4.69-.61 3.89c-.12.78.48 1.49 1.28 1.49.64 0 1.18-.46 1.28-1.09l.53-3.41h2.58L11.8 18.43h-1.24c-.63 0-1.16.46-1.26 1.08v.01c-.13.78.47 1.48 1.26 1.48h4.67c.63 0 1.17-.46 1.26-1.08v-.01a1.28 1.28 0 0 0-1.26-1.48h-.86l2-12.86h2.58l-.47 3.01c-.12.78.48 1.49 1.28 1.49h.03c.64 0 1.18-.46 1.28-1.09l.57-3.67A2 2 0 0 0 19.66 3h-8.92c-.98 0-1.82.72-1.98 1.69zM8 5H4.86c-.5 0-.92.36-.99.85-.1.6.37 1.15.99 1.15h2.83L8 5zm-.61 4H4.25c-.5 0-.92.36-.99.85-.1.6.37 1.15.99 1.15h2.83l.31-2zm.92 8H3.17c-.49 0-.91.36-.99.85-.1.6.37 1.15.99 1.15H8l.31-2zm.62-4H3.79c-.49 0-.91.36-.99.85-.1.6.37 1.15.99 1.15h4.84l.3-2z"
    />
  {:else if variation === 'sharp'}
    <path
      d="m9.03 3-1.11 7.07h2.62l.7-4.5h2.58L11.8 18.43H9.47L9.06 21h7.27l.4-2.57h-2.35l2-12.86h2.58l-.71 4.5h2.65L22 3H9.03zM8 5H4l-.31 2h4L8 5zm-.61 4h-4l-.31 2h4l.31-2zm.92 8h-6L2 19h6l.31-2zm.62-4h-6l-.31 2h6.01l.3-2z"
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
@prop export let ariaLabel = 'rtt';
-->
