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

  export let ariaLabel = 'holiday village';
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
      d="m8 4-6 6v10h12V10L8 4zm4 14H9v-3H7v3H4v-7.17l4-4 4 4V18zm-3-5H7v-2h2v2zm9 7V8.35L13.65 4h-2.83L16 9.18V20h2zm4 0V6.69L19.31 4h-2.83L20 7.52V20h2z"
    />
  {:else if variation === 'filled'}
    <path
      d="M18 20V8.35L13.65 4h-2.83L16 9.18V20h2zm4 0V6.69L19.31 4h-2.83L20 7.52V20h2zM8 4l-6 6v10h5v-5h2v5h5V10L8 4zm1 9H7v-2h2v2z"
    />
  {:else if variation === 'round'}
    <path
      d="M17 20c.55 0 1-.45 1-1V8.76c0-.27-.11-.52-.29-.71l-3.76-3.76c-.19-.18-.44-.29-.71-.29-.89 0-1.34 1.08-.71 1.71l3.32 3.32c.1.09.15.22.15.35V19c0 .55.45 1 1 1zm4 0c.55 0 1-.45 1-1V7.11c0-.26-.11-.52-.29-.71l-2.1-2.11c-.19-.18-.45-.29-.71-.29-.9 0-1.34 1.08-.71 1.71l1.67 1.67a.5.5 0 0 1 .14.35V19c0 .55.45 1 1 1zM8 15c.55 0 1 .45 1 1v4h4c.55 0 1-.45 1-1v-8.59c0-.27-.11-.52-.29-.71l-5-5a.996.996 0 0 0-1.41 0l-5 5c-.19.19-.3.45-.3.71V19c0 .55.45 1 1 1h4v-4c0-.55.45-1 1-1zm0-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M18 20V8.35L13.65 4h-2.83L16 9.18V20h2zm4 0V6.69L19.31 4h-2.83L20 7.52V20h2zM8 4l-6 6v10h5v-5h2v5h5V10L8 4zm1 9H7v-2h2v2z"
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
@prop export let ariaLabel = 'holiday village';
-->
