# Advanced CGNAT Dual-Node Setup

Detailed guide for running stable DAC nodes behind CGNAT using Dual-Node Single Machine architecture.

## Network Topology

```ascii
Internet
   └── Router (CGNAT)
         └── Single Physical Machine
               ├── Windows (Node 1 - Primary)
               └── WSL2 (Ubuntu) (Node 2 - Secondary)
Why This Setup Excels

Bypasses many CGNAT restrictions through internal peering
Maximizes limited hardware resources
Provides redundancy within a single machine
Proven stable during Testnet Inception

Key Configurations
1. Static Peering

Configure both nodes to connect to each other internally
Add reliable external peers
Optimize peer discovery

2. Sync Strategy

Use fast syncmode for faster initial synchronization

3. Monitoring & Automation

DAC Node Dashboard integration
Auto-restart scripts (Windows + WSL)
Log management and resource monitoring

4. Resource Allocation

Proper CPU and RAM distribution between Windows and WSL2
Avoid resource contention

Maximizing Quantum Energy (QE)

Maintain uptime > 95%
Ensure good peer quality
Consistent block propagation
Stable network connectivity

References

DAC Dual Node CGNAT Setup Repository

