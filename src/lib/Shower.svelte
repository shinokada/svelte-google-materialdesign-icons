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

  export let ariaLabel = 'shower';
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
      d="M9 17c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm3-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3-4v2H5v-2c0-3.53 2.61-6.43 6-6.92V3h2v2.08c3.39.49 6 3.39 6 6.92zm-2 0c0-2.76-2.24-5-5-5s-5 2.24-5 5h10zm-9 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
    />
  {:else if variation === 'filled'}
    <circle cx="8" cy="17" r="1" /><circle cx="12" cy="17" r="1" /><circle
      cx="16"
      cy="17"
      r="1"
    /><path d="M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92z" /><circle
      cx="8"
      cy="20"
      r="1"
    /><circle cx="12" cy="20" r="1" /><circle cx="16" cy="20" r="1" />
  {:else if variation === 'round'}
    <circle cx="8" cy="17" r="1" /><circle cx="12" cy="17" r="1" /><circle
      cx="16"
      cy="17"
      r="1"
    /><path
      d="M13 5.08V4c0-.55-.45-1-1-1s-1 .45-1 1v1.08C7.61 5.57 5 8.47 5 12v1c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1c0-3.53-2.61-6.43-6-6.92z"
    /><circle cx="8" cy="20" r="1" /><circle cx="12" cy="20" r="1" /><circle
      cx="16"
      cy="20"
      r="1"
    />
  {:else if variation === 'sharp'}
    <circle cx="8" cy="17" r="1" /><circle cx="12" cy="17" r="1" /><circle
      cx="16"
      cy="17"
      r="1"
    /><path d="M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92z" /><circle
      cx="8"
      cy="20"
      r="1"
    /><circle cx="12" cy="20" r="1" /><circle cx="16" cy="20" r="1" />
  {:else if variation === 'two-tone'}
    <path d="M12 7c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5z" opacity=".3" /><circle
      cx="8"
      cy="20"
      r="1"
    /><circle cx="16" cy="17" r="1" /><path
      d="M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92zM7 12c0-2.76 2.24-5 5-5s5 2.24 5 5H7z"
    /><circle cx="16" cy="20" r="1" /><circle cx="12" cy="17" r="1" /><circle
      cx="8"
      cy="17"
      r="1"
    /><circle cx="12" cy="20" r="1" />
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
@prop export let ariaLabel = 'shower';
-->
