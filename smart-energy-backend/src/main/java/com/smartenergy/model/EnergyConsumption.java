package com.smartenergy.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "energy_consumption")
public class EnergyConsumption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String deviceName;
    private double powerUsage;  // in kWh
    private LocalDateTime timestamp;

    public EnergyConsumption() {}

    public EnergyConsumption(String deviceName, double powerUsage, LocalDateTime timestamp) {
        this.deviceName = deviceName;
        this.powerUsage = powerUsage;
        this.timestamp = timestamp;
    }

    public Long getId() {
        return id;
    }

    public String getDeviceName() {
        return deviceName;
    }

    public double getPowerUsage() {
        return powerUsage;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }
}
