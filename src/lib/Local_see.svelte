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

  export let ariaLabel = 'local see';
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
      d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l.59-.65L9.88 4h4.24l1.24 1.35.59.65H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8.2c-1.77 0-3.2-1.43-3.2-3.2 0-1.77 1.43-3.2 3.2-3.2s3.2 1.43 3.2 3.2c0 1.77-1.43 3.2-3.2 3.2z"
    />
  {:else if variation === 'filled'}
    <circle cx="12" cy="12" r="3.2" /><path
      d="M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
    />
  {:else if variation === 'round'}
    <path
      d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5c1.23 0 2.25-.9 2.46-2.07-1-1.01-1.83-1.98-2.48-2.93A2.51 2.51 0 0 0 9.5 14z"
    /><path
      d="M18.65 17.08a1 1 0 0 1-1.3 0c-1.26-1.08-.7-.61-1.3-1.14-.83 1.74-2.73 2.87-4.85 2.5a4.514 4.514 0 0 1-3.63-3.63 4.488 4.488 0 0 1 3.31-5.14C10.3 8.45 10 7.28 10 6.15c0-.75.1-1.47.28-2.15h-.4c-.56 0-1.1.24-1.48.65L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6.03c-1.41 1.49-2.65 2.51-3.35 3.11z"
    /><path
      d="M17.34 14.42c.37.33.95.33 1.33 0C22.22 11.25 24 8.5 24 6.15 24 2.42 21.15 0 18 0s-6 2.42-6 6.15c0 2.35 1.78 5.1 5.34 8.27zm-.07-9.17L18 3l.73 2.25H21l-1.85 1.47.7 2.28L18 7.59 16.15 9l.7-2.28L15 5.25h2.27z"
    />
  {:else if variation === 'sharp'}
    <circle cx="12" cy="12" r="3.2" /><path
      d="M22 4h-5.17L15 2H9L7.17 4H2v16h20V4zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M20 6h-4.05l-.59-.65L14.12 4H9.88L8.65 5.35l-.6.65H4v12h16V6zm-8 11c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
      opacity=".3"
    /><path
      d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 6h4.05l.59-.65L9.88 4h4.24l1.24 1.35.59.65H20v12H4V6zm8 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8.2c-1.77 0-3.2-1.43-3.2-3.2 0-1.77 1.43-3.2 3.2-3.2s3.2 1.43 3.2 3.2c0 1.77-1.43 3.2-3.2 3.2z"
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
@prop export let ariaLabel = 'local see';
-->
