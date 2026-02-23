/**
 * @module @minions-orchestration/sdk/schemas
 * Custom MinionType schemas for Minions Orchestration.
 */

import type { MinionType } from 'minions-sdk';

export const clawspaceType: MinionType = {
  id: 'orchestration-clawspace',
  name: 'Clawspace',
  slug: 'clawspace',
  description: 'A registered clawspace with its status and composition.',
  icon: '🏗️',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'toolboxIds', type: 'string', label: 'toolboxIds' },
    { name: 'agentIds', type: 'string', label: 'agentIds' },
    { name: 'orchestratorAgentId', type: 'string', label: 'orchestratorAgentId' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const toolboxregistrationType: MinionType = {
  id: 'orchestration-toolbox-registration',
  name: 'Toolbox registration',
  slug: 'toolbox-registration',
  description: 'Maps a toolbox to the agent that owns it within a clawspace.',
  icon: '🔗',
  schema: [
    { name: 'toolboxId', type: 'string', label: 'toolboxId' },
    { name: 'toolboxName', type: 'string', label: 'toolboxName' },
    { name: 'agentId', type: 'string', label: 'agentId' },
    { name: 'agentName', type: 'string', label: 'agentName' },
    { name: 'role', type: 'select', label: 'role' },
    { name: 'clawspaceId', type: 'string', label: 'clawspaceId' },
    { name: 'registeredAt', type: 'string', label: 'registeredAt' },
  ],
};

export const agentfleetconfigType: MinionType = {
  id: 'orchestration-agent-fleet-config',
  name: 'Agent fleet config',
  slug: 'agent-fleet-config',
  description: 'Fleet composition and shared resources for a clawspace.',
  icon: '⚙️',
  schema: [
    { name: 'clawspaceId', type: 'string', label: 'clawspaceId' },
    { name: 'orchestratorAgentId', type: 'string', label: 'orchestratorAgentId' },
    { name: 'workerAgentIds', type: 'string', label: 'workerAgentIds' },
    { name: 'sharedToolboxIds', type: 'string', label: 'sharedToolboxIds' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'lastUpdatedAt', type: 'string', label: 'lastUpdatedAt' },
  ],
};

export const customTypes: MinionType[] = [
  clawspaceType,
  toolboxregistrationType,
  agentfleetconfigType,
];

