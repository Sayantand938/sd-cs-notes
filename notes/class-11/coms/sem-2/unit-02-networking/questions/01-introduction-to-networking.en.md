# Unit 02 01 Introduction To Networking Saq

### Q1 (saq)

Distinguish between analogue and digital communication, giving one example of each.

**Answer:**
**Analogue communication** transmits data as a continuous, wave-like signal (typically a sine wave). It is highly susceptible to noise and distortion, and needs less bandwidth. Example: human voice on a landline telephone.

**Digital communication** transmits data as discrete values — binary 0s and 1s, drawn as square waves. It is far less susceptible to noise because errors can be detected and corrected, but it needs more bandwidth. Example: data between computers on the internet.

### Q2 (saq)

Explain the three modes of communication — simplex, half duplex, and full duplex — with one example of each.

**Answer:**
The modes describe the *direction* of data flow between two devices.

| Mode | Direction | Example |
| :--- | :--- | :--- |
| **Simplex** | One way only — one device is always the sender, the other always the receiver. | Keyboard to CPU; radio broadcast |
| **Half Duplex** | Both directions, but **only one at a time** — while one sends, the other must wait. | Walkie-talkie; CB radio |
| **Full Duplex** | Both directions **simultaneously**. | Mobile phone call; modern Ethernet |

### Q3 (saq)

What is a client-server network? State two advantages and two disadvantages.

**Answer:**
A **centralized** model in which one powerful computer (the **server**) provides resources, services, or data, and the other computers (**clients**) request and consume them.

**Advantages**
- Centralized security — access is controlled from one place.
- Easy to back up data, and scalable as the organisation grows.

**Disadvantages**
- Expensive to set up, since a dedicated server is required.
- The server is a **single point of failure** — if it goes down, the whole network is affected.

Example: browsing the web (your browser is the client, the web server is the host).

### Q4 (saq)

What is a peer-to-peer network, and how does it differ from a client-server network?

**Answer:**
A **decentralized** model in which all computers (peers) are equal. Each peer can act as **both a client and a server**, sharing resources directly with the others. There is no central server.

**How it differs:** in client-server, roles are fixed and authority is centralized — one server serves many clients. In P2P, every machine is both provider and consumer, so no single machine is in control.

**Advantages:** cheap to set up, no server needed, easy to configure.
**Disadvantages:** poor security, difficult to back up, and it does not scale to large networks.

Example: file sharing on a home Wi-Fi network; BitTorrent.

### Q5 (saq)

Compare serial and parallel communication in terms of transmission, speed, cost, and examples.

**Answer:**
This describes *how bits are physically transmitted* over a channel.

| Feature | Serial | Parallel |
| :--- | :--- | :--- |
| **Transmission** | Bits sent **one after another** over a **single wire** | Multiple bits sent **simultaneously** over **multiple wires** |
| **Speed** | Slower over short distances, but **faster and more reliable over long distances** — no skew | Faster over short distances, but suffers **skew** over long distances |
| **Cost** | Cheaper (fewer wires) | More expensive (wider, multi-wire cables) |
| **Examples** | USB, SATA, Ethernet, fibre optics | Old printer ports (LPT), IDE drive cables |

### Q6 (saq)

Why is serial communication preferred over parallel communication for long distances?

**Answer:**
Because of **skew**.

In parallel communication, several bits travel along separate wires at the same time. Over a long cable the wires are not perfectly identical, so bits sent together can arrive at slightly different times. The receiver then reads them out of order and the data is corrupted. The longer the cable, the worse this becomes.

Serial communication sends bits one after another down a single wire, so there is nothing to fall out of step. That is why serial links such as USB, SATA and Ethernet are used for long-distance and high-speed connections, while parallel is now limited to very short runs.

### Q7 (saq)

Define bandwidth, channel capacity, and baud rate. State the unit of each.

**Answer:**
**Bandwidth** — the maximum rate at which data can be transferred over a network path in a given time. Unit: bits per second (bps, Kbps, Mbps, Gbps). *Analogy: the width of a water pipe.*

**Channel capacity** — the *theoretical maximum* rate of error-free data a specific channel can carry under ideal conditions (Shannon's Theorem); it depends on bandwidth and the signal-to-noise ratio. Unit: bits per second (bps).

**Baud rate** — the number of **signal changes (symbols) per second** on a channel. Unit: baud (symbols per second).

### Q8 (saq)

Is baud rate always equal to bit rate? Explain with an example.

**Answer:**
**No.** Baud rate counts *signal changes per second*; bit rate counts *bits per second*. They are equal only when each signal change carries exactly one bit.

If a modulation scheme encodes **4 bits in each signal change**, then:

```text
bit rate = 4 × baud rate
```

So a channel running at 1000 baud could carry 4000 bps. This is why baud rate alone does not tell you how much data a link can carry — the number of bits encoded per symbol matters too.

### Q9 (saq)

Differentiate between synchronous and asynchronous transmission.

**Answer:**
The distinction is **how the sender and receiver agree on timing**.

| Feature | Synchronous | Asynchronous |
| :--- | :--- | :--- |
| **Data unit** | Blocks or frames | One byte (character) at a time |
| **Timing** | A **common clock signal** keeps both ends synchronized | **No common clock** — uses **start and stop bits** around each byte |
| **Overhead** | Low; no per-byte framing | High; 2–3 extra bits per byte |
| **Speed** | High, used in high-performance networks | Low, used in simple, low-cost devices |
| **Examples** | Fibre optic communication, modern LANs | Keyboard input, old modems, RS-232 |

### Q10 (saq)

Why does asynchronous transmission have higher overhead than synchronous transmission?

**Answer:**
Because asynchronous transmission **frames every single byte** with its own **start bit and stop bit** (often a parity bit as well). That is roughly 2–3 extra bits for every 8 bits of actual data — a large proportional cost.

Synchronous transmission sends data in **blocks or frames** and relies on a **shared clock** to keep both ends aligned. Because the timing is maintained by the clock rather than re-established for every character, no per-byte framing is needed, so almost all transmitted bits are real data.

The trade-off is that asynchronous is simpler and cheaper to implement, which is why it is used for slow, low-cost devices such as keyboards.

### Q11 (saq)

Compare baseband and broadband transmission.

**Answer:**
These terms describe **how the medium's bandwidth is used**.

| Feature | Baseband | Broadband |
| :--- | :--- | :--- |
| **Signal** | Digital | Analogue (often carrying digital data by modulation) |
| **Bandwidth** | Uses the **entire bandwidth** for a **single signal** | Divides bandwidth into **multiple channels** using FDM |
| **Direction** | Usually half or full duplex (two cables needed for true full duplex) | Full duplex — different frequencies for send and receive |
| **Distance** | Best over short distances (within a building) | Suited to long distances; easily amplified |
| **Examples** | Ethernet LAN (100BASE-TX), USB | Cable TV, DSL internet, Wi-Fi, cellular |

### Q12 (saq)

A company wants to send data over a long-distance cable and needs to carry several independent signals at once. Which transmission method suits them, and why?

**Answer:**
**Broadband transmission.**

Two requirements are stated. First, **long distance** — broadband uses analogue signals that can be amplified and repeated along the way, whereas baseband is intended for short runs within a building. Second, **several independent signals at once** — broadband divides the medium's bandwidth into multiple channels using **Frequency Division Multiplexing (FDM)**, letting many signals share one cable. It also supports **full duplex** naturally, since sending and receiving use different frequency bands.

Baseband would be unsuitable: it consumes the entire bandwidth for a single signal and is designed for short-distance LANs such as Ethernet.

### Q13 (saq)

Explain how Frequency Division Multiplexing (FDM) allows multiple signals to share one medium.

**Answer:**
FDM divides the total **bandwidth of the medium into several narrower frequency bands**, and assigns each signal its own band.

The signals are transmitted **simultaneously** but at different frequencies, so they do not overlap or interfere. At the receiving end, filters separate the bands and recover each original signal.

This is how **broadband** transmission works — for example, a cable TV connection carries many channels down one cable, and DSL carries internet data and telephone calls at the same time over a single line.

### Q14 (saq)

Why is digital communication less susceptible to noise than analogue communication?

**Answer:**
Because a digital signal carries only **two discrete levels** — 0 and 1 — rather than a continuously varying waveform.

Analogue signals are represented by a smooth wave, so any noise added in transit changes the shape of the wave and the receiver cannot tell the noise from the original signal. The distortion accumulates over distance.

A digital receiver only has to decide whether the incoming level is nearer to 0 or to 1. A small amount of noise does not change which of the two values is intended, and if corruption is severe it can usually be **detected and corrected** with error-detecting codes. This is why digital transmission is more reliable, and why it can be regenerated cleanly at repeaters rather than merely amplified along with its noise.

### Q15 (saq)

A school computer lab uses one central server for user accounts and file storage. Name the network architecture and state one risk of this design.

**Answer:**
This is a **client-server network** — a centralized model where the server provides resources and the client machines request them. Centralized user accounts and file storage are typical of this architecture, and they bring the benefit of centralized security and easy backup.

The main risk is that the server is a **single point of failure**: if it goes down, every client loses access to accounts and files, and the whole network is affected. The design is also relatively **expensive to set up**, since a dedicated server machine is required.

### Q16 (saq)

Why is a peer-to-peer network generally considered less secure than a client-server network?

**Answer:**
Because there is **no central point of control**.

In a client-server network, user accounts, permissions and security policy are administered on the server, so access can be restricted and audited from one place. In a P2P network every peer is equal and can share its own resources directly, so there is no single authority to enforce who may access what.

This also makes **backup difficult**, since files are scattered across many machines rather than held centrally, and it means a single compromised peer can expose whatever it shares. These weaknesses, along with poor scalability, are why P2P suits small home networks rather than large organisations.

### Q17 (saq)

Explain the difference between bandwidth and channel capacity.

**Answer:**
**Bandwidth** is the maximum rate at which data can be transferred over a network path in a given time. It is a property of the medium, measured in bits per second. Think of it as the *width of a pipe*.

**Channel capacity** is the *theoretical maximum* rate of **error-free** data that a specific channel can carry under **ideal conditions**, as described by Shannon's Theorem. It depends not only on bandwidth but also on the **signal-to-noise ratio** of the channel.

The key difference: bandwidth describes how much the medium can carry in principle, while channel capacity is the achievable error-free limit once noise is taken into account. A channel can have generous bandwidth yet a low capacity if it is noisy.

### Q18 (saq)

Which transmission mode is used by a walkie-talkie and which by a telephone call? Justify your answer.

**Answer:**
A **walkie-talkie** uses **half duplex**, while a **telephone call** uses **full duplex**.

With a walkie-talkie, both parties can speak and be heard, but **not at the same time** — while one is transmitting, the other must wait and press to talk. The channel carries traffic in both directions, but only one direction at any moment.

In a telephone call, both parties can speak and listen **simultaneously**, and each hears the other without waiting. That simultaneous two-way flow is the defining feature of full duplex.

### Q19 (saq)

A network administrator measures 2000 baud on a line where each signal change encodes 2 bits. What is the bit rate, and why does the answer matter?

**Answer:**
Each signal change carries **2 bits**, so the bit rate is twice the baud rate:

```text
bit rate = bits per symbol × baud rate
         = 2 × 2000
         = 4000 bps  (4 Kbps)
```

It matters because **baud rate on its own does not tell you how much data a link carries**. Baud counts signal changes per second, not bits. Two links running at the same baud rate can have different throughputs if they encode a different number of bits per symbol, which is exactly what more advanced modulation schemes exploit — encoding more bits per signal change to raise throughput without needing a faster signalling rate.

### Q20 (saq)

For each of the following, name the communication mode: (a) a keyboard sending keystrokes to a CPU, (b) a mobile phone call, (c) a CB radio conversation.

**Answer:**
(a) **Simplex** — the keyboard only ever sends and the CPU only ever receives; data flows in one direction only.

(b) **Full duplex** — both parties can speak and listen at the same time.

(c) **Half duplex** — either party can speak, but only one at a time; the other must wait for the channel to become free.
