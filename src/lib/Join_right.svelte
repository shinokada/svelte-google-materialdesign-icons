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

  export let ariaLabel = 'join right';
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
    <ellipse cx="12" cy="12" rx="3" ry="5.74" /><path
      d="M16.5 12c0 .97-.23 4.16-3.03 6.5.78.31 1.63.5 2.53.5 3.86 0 7-3.14 7-7s-3.14-7-7-7c-.9 0-1.75.19-2.53.5 2.8 2.34 3.03 5.53 3.03 6.5zM8 19c.9 0 1.75-.19 2.53-.5-.61-.51-1.1-1.07-1.49-1.63-.33.08-.68.13-1.04.13-2.76 0-5-2.24-5-5s2.24-5 5-5c.36 0 .71.05 1.04.13.39-.56.88-1.12 1.49-1.63C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7z"
    />
  {:else if variation === 'filled'}
    <ellipse cx="12" cy="12" rx="3" ry="5.74" /><path
      d="M16.5 12c0 .97-.23 4.16-3.03 6.5.78.31 1.63.5 2.53.5 3.86 0 7-3.14 7-7s-3.14-7-7-7c-.9 0-1.75.19-2.53.5 2.8 2.34 3.03 5.53 3.03 6.5zM8 19c.9 0 1.75-.19 2.53-.5-.61-.51-1.1-1.07-1.49-1.63-.33.08-.68.13-1.04.13-2.76 0-5-2.24-5-5s2.24-5 5-5c.36 0 .71.05 1.04.13.39-.56.88-1.12 1.49-1.63C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7z"
    />
  {:else if variation === 'round'}
    <path
      d="M11.32 17.2c.39.35.98.35 1.37 0C14.65 15.44 15 13.16 15 12c0-1.15-.35-3.44-2.32-5.2-.39-.35-.98-.35-1.37 0C9.35 8.56 9 10.84 9 12c0 1.15.35 3.44 2.32 5.2z"
    /><path
      d="M16.5 12c0 .97-.23 4.16-3.03 6.5.78.31 1.63.5 2.53.5 3.86 0 7-3.14 7-7s-3.14-7-7-7c-.9 0-1.75.19-2.53.5 2.8 2.34 3.03 5.53 3.03 6.5zM8 19c.9 0 1.75-.19 2.53-.5-.61-.51-1.1-1.07-1.49-1.63-.33.08-.68.13-1.04.13-2.76 0-5-2.24-5-5s2.24-5 5-5c.36 0 .71.05 1.04.13.39-.56.88-1.12 1.49-1.63C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7z"
    />
  {:else if variation === 'sharp'}
    <ellipse cx="12" cy="12" rx="3" ry="5.74" /><path
      d="M16.5 12c0 .97-.23 4.16-3.03 6.5.78.31 1.63.5 2.53.5 3.86 0 7-3.14 7-7s-3.14-7-7-7c-.9 0-1.75.19-2.53.5 2.8 2.34 3.03 5.53 3.03 6.5zM8 19c.9 0 1.75-.19 2.53-.5-.61-.51-1.1-1.07-1.49-1.63-.33.08-.68.13-1.04.13-2.76 0-5-2.24-5-5s2.24-5 5-5c.36 0 .71.05 1.04.13.39-.56.88-1.12 1.49-1.63C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7z"
    />
  {:else if variation === 'two-tone'}
    <ellipse cx="12" cy="12" rx="3" ry="5.74" /><path
      d="M16.5 12c0 .97-.23 4.16-3.03 6.5.78.31 1.63.5 2.53.5 3.86 0 7-3.14 7-7s-3.14-7-7-7c-.9 0-1.75.19-2.53.5 2.8 2.34 3.03 5.53 3.03 6.5zM8 19c.9 0 1.75-.19 2.53-.5-.61-.51-1.1-1.07-1.49-1.63-.33.08-.68.13-1.04.13-2.76 0-5-2.24-5-5s2.24-5 5-5c.36 0 .71.05 1.04.13.39-.56.88-1.12 1.49-1.63C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7z"
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
@prop export let ariaLabel = 'join right';
-->
