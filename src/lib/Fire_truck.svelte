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

  export let ariaLabel = 'fire truck';
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
      d="m22.9 10.69-1.44-4.32A2.01 2.01 0 0 0 19.56 5H19V4c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1h-2c-1.1 0-2 .9-2 2v4H1v5c0 1.1.9 2 2 2h1c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h3v-6.68c0-.21-.03-.42-.1-.63zM14 7h5.56l1.33 4H14V7zM7 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-3H9.22c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3v-3h9v3zm5 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.34-1-2.22-1s-1.67.39-2.22 1H14v-3h7v3h-1.78z"
    /><path
      d="M11 8.5h-1v-2h1V5H1v1.5h1v2H1V10h10V8.5zm-2.5 0H6.75v-2H8.5v2zm-5-2h1.75v2H3.5v-2z"
    />
  {:else if variation === 'filled'}
    <path
      d="m22.9 10.69-1.44-4.32A2.01 2.01 0 0 0 19.56 5H19V4c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1h-2c-1.1 0-2 .9-2 2v4H1v5c0 1.1.9 2 2 2h1c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h3v-6.68c0-.21-.03-.42-.1-.63zM7 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-3-8V7h5.56l1.33 4H14z"
    /><path
      d="M11 8.5h-1v-2h1V5H1v1.5h1v2H1V10h10V8.5zm-5.75 0H3.5v-2h1.75v2zm3.25 0H6.75v-2H8.5v2z"
    />
  {:else if variation === 'round'}
    <path
      d="m22.9 10.69-1.44-4.32A2.01 2.01 0 0 0 19.56 5H19V4c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1h-2c-1.1 0-2 .9-2 2v4H3c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h1c1.1 0 2-.9 2-2v-4.68c0-.21-.03-.42-.1-.63zM7 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-3-8V7h5.56l1.33 4H14z"
    /><path
      d="M10.25 8.5H10v-2h.25c.41 0 .75-.34.75-.75S10.66 5 10.25 5h-8.5c-.41 0-.75.34-.75.75s.34.75.75.75H2v2h-.25c-.41 0-.75.34-.75.75s.34.75.75.75h8.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm-5 0H3.5v-2h1.75v2zm3.25 0H6.75v-2H8.5v2z"
    />
  {:else if variation === 'sharp'}
    <path
      d="m23 11-2-6h-2V3h-3v2h-4v6H1v7h3c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h3v-7zM7 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-3-8V7h5.56l1.33 4H14z"
    /><path
      d="M11 8.5h-1v-2h1V5H1v1.5h1v2H1V10h10V8.5zm-5.75 0H3.5v-2h1.75v2zm3.25 0H6.75v-2H8.5v2z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M3 16h1.78c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1H12v-3H3v3zm11 0h.78c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1H21v-3h-7v3z"
      opacity=".3"
    /><path
      d="m22.9 10.69-1.44-4.32A2.01 2.01 0 0 0 19.56 5H19V4c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1h-2c-1.1 0-2 .9-2 2v4H1v5c0 1.1.9 2 2 2h1c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h3v-6.68c0-.21-.03-.42-.1-.63zM7 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-3H9.22c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3v-3h9v3zm2-9h5.56l1.33 4H14V7zm3 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4-3h-1.78c-.55-.61-1.34-1-2.22-1s-1.67.39-2.22 1H14v-3h7v3z"
    /><path
      d="M11 8.5h-1v-2h1V5H1v1.5h1v2H1V10h10V8.5zm-5.75 0H3.5v-2h1.75v2zm3.25 0H6.75v-2H8.5v2z"
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
@prop export let ariaLabel = 'fire truck';
-->
