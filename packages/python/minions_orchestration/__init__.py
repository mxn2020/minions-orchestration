"""
Minions Orchestration Python SDK

Clawspace registry, toolbox-to-agent mappings, and fleet configuration
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Orchestration.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
