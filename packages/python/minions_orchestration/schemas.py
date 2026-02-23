"""
Minions Orchestration SDK — Type Schemas
Custom MinionType schemas for Minions Orchestration.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

clawspace_type = MinionType(
    id="orchestration-clawspace",
    name="Clawspace",
    slug="clawspace",
    description="A registered clawspace with its status and composition.",
    icon="🏗️",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="toolboxIds", type="string", label="toolboxIds"),
        FieldDefinition(name="agentIds", type="string", label="agentIds"),
        FieldDefinition(name="orchestratorAgentId", type="string", label="orchestratorAgentId"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

toolbox_registration_type = MinionType(
    id="orchestration-toolbox-registration",
    name="Toolbox registration",
    slug="toolbox-registration",
    description="Maps a toolbox to the agent that owns it within a clawspace.",
    icon="🔗",
    schema=[
        FieldDefinition(name="toolboxId", type="string", label="toolboxId"),
        FieldDefinition(name="toolboxName", type="string", label="toolboxName"),
        FieldDefinition(name="agentId", type="string", label="agentId"),
        FieldDefinition(name="agentName", type="string", label="agentName"),
        FieldDefinition(name="role", type="select", label="role"),
        FieldDefinition(name="clawspaceId", type="string", label="clawspaceId"),
        FieldDefinition(name="registeredAt", type="string", label="registeredAt"),
    ],
)

agent_fleet_config_type = MinionType(
    id="orchestration-agent-fleet-config",
    name="Agent fleet config",
    slug="agent-fleet-config",
    description="Fleet composition and shared resources for a clawspace.",
    icon="⚙️",
    schema=[
        FieldDefinition(name="clawspaceId", type="string", label="clawspaceId"),
        FieldDefinition(name="orchestratorAgentId", type="string", label="orchestratorAgentId"),
        FieldDefinition(name="workerAgentIds", type="string", label="workerAgentIds"),
        FieldDefinition(name="sharedToolboxIds", type="string", label="sharedToolboxIds"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="lastUpdatedAt", type="string", label="lastUpdatedAt"),
    ],
)

custom_types: list[MinionType] = [
    clawspace_type,
    toolbox_registration_type,
    agent_fleet_config_type,
]

