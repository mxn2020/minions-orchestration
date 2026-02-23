/**
 * Minions Orchestration SDK
 *
 * Clawspace registry, toolbox-to-agent mappings, and fleet configuration
 *
 * @module @minions-orchestration/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Orchestration.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
