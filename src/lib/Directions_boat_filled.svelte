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

  export let ariaLabel = 'directions boat filled';
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
      d="m19.77 12.66-1.12 3.97c-.78-.43-1.07-.86-2.65-2.67-1.6 1.82-2.43 3.04-4 3.04-1.53 0-2.34-1.15-4-3.04-1.6 1.82-1.87 2.21-2.65 2.65l-1.13-3.96L12 10.11l7.77 2.55zM15 1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.63.19-.81.84-.66 1.28L3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.91-6.68c.11-.37.04-1.06-.66-1.28l-1.3-.42V6c0-1.1-.9-2-2-2h-3V1zM6 9.97V6h12v3.97L12 8 6 9.97zm10 9.71c-1.22.85-2.61 1.28-4 1.28s-2.78-.43-4-1.28C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 1.26.64 2.63.97 4 .97s2.74-.32 4-.97c1.26.65 2.62.99 4 .99h2v-2h-2c-1.39 0-2.78-.47-4-1.32z"
    />
  {:else if variation === 'filled'}
    <path
      d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99a8.752 8.752 0 0 0 8 0c1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.9-6.68c.11-.37.04-1.06-.66-1.28L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.63.19-.81.84-.66 1.28L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"
    />
  {:else if variation === 'round'}
    <path
      d="M20 21c-1.19 0-2.38-.35-3.47-.98-.33-.19-.73-.19-1.07 0a6.825 6.825 0 0 1-6.93 0c-.33-.19-.73-.19-1.07 0-1.08.63-2.27.98-3.46.98H3c-.55 0-1 .45-1 1s.45 1 1 1h1c1.38 0 2.74-.35 4-.99a8.752 8.752 0 0 0 8 0c1.26.65 2.62.99 4 .99h1c.55 0 1-.45 1-1s-.45-1-1-1h-1zM3.95 19H4c1.27 0 2.42-.55 3.33-1.33.39-.34.95-.34 1.34 0C9.58 18.45 10.73 19 12 19s2.42-.55 3.33-1.33c.39-.34.95-.34 1.34 0 .91.78 2.06 1.33 3.33 1.33h.05l1.9-6.68c.11-.37.04-1.06-.66-1.28L20 10.62V6c0-1.1-.9-2-2-2h-3V2c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.63.19-.81.84-.66 1.28L3.95 19zM6 6h12v3.97L12.62 8.2c-.41-.13-.84-.13-1.25 0L6 9.97V6z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99a8.752 8.752 0 0 0 8 0c1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l2.18-7.65-2.23-.73V4h-5V1H9v3H4v6.62l-2.23.73L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="m19.77 12.66-1.12 3.97c-.78-.43-1.07-.86-2.65-2.67-1.6 1.82-2.43 3.04-4 3.04-1.53 0-2.34-1.15-4-3.04-1.6 1.82-1.87 2.21-2.65 2.65l-1.13-3.96L12 10.11l7.77 2.55z"
      opacity=".3"
    /><path
      d="m19.77 12.66-1.12 3.97c-.78-.43-1.07-.86-2.65-2.67-1.6 1.82-2.43 3.04-4 3.04-1.53 0-2.34-1.15-4-3.04-1.6 1.82-1.87 2.21-2.65 2.65l-1.13-3.96L12 10.11l7.77 2.55zM15 1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.63.19-.81.84-.66 1.28L3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.91-6.68c.11-.37.04-1.06-.66-1.28l-1.3-.42V6c0-1.1-.9-2-2-2h-3V1zM6 9.97V6h12v3.97L12 8 6 9.97zm10 9.71c-1.22.85-2.61 1.28-4 1.28s-2.78-.43-4-1.28C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 1.26.64 2.63.97 4 .97s2.74-.32 4-.97c1.26.65 2.62.99 4 .99h2v-2h-2c-1.39 0-2.78-.47-4-1.32z"
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
@prop export let ariaLabel = 'directions boat filled';
-->
