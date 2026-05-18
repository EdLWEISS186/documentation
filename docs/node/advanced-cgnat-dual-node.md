# Advanced CGNAT Dual-Node Setup for Testnet Inception

Detailed technical guide for participants seeking to maximize their contribution and **Quantum Energy (QE)** during DAC Testnet Inception while operating behind CGNAT.

## Network Topology

```ascii
Internet
   └── Router (CGNAT)
         └── Single Physical Machine
               ├── Windows (Node 1 - Primary)
               └── WSL2 (Ubuntu) (Node 2 - Secondary)
Why This Setup is Effective
The Dual-Node Single Machine configuration enables efficient resource utilization and internal peering, allowing participants to deliver stronger contributions to the Testnet network while overcoming common CGNAT limitations. This setup has shown strong performance in accumulating Quantum Energy (QE) during the Testnet Inception campaign.
Key Configurations

Static peering (internal + external)
Fast syncmode strategy
Auto-restart automation
Resource optimization between host and WSL2

Troubleshooting
Issue,Possible Cause,Solution
Low peer count,CGNAT restrictions,Implement static peering + internal node connection
Frequent disconnects,Resource contention,Optimize CPU/RAM allocation and use auto-restart
Slow synchronization,Storage / bandwidth,Use NVMe SSD with fast syncmode
High resource usage,Dual nodes competing,Fine-tune allocation between Windows and WSL2
Best Practices for QE Maximization

Maintain consistent uptime above 95%
Monitor system resources continuously
Implement reliable auto-restart mechanisms
Use internal IP for peering between the two nodes
Keep both nodes updated with the latest Testnet version
Regularly review logs and dashboard metrics

Active and stable node operation is a valuable form of ecosystem contribution during Testnet Inception. High-quality participation helps strengthen network decentralization and overall Testnet performance.
References

DAC Dual Node CGNAT Setup Repository

