package com.smartenergy.service;

import com.smartenergy.model.EnergyConsumption;
import com.smartenergy.repository.EnergyConsumptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class EnergyService {

    @Autowired
    private EnergyConsumptionRepository repository;

    public List<EnergyConsumption> getAllEnergyData() {
        return repository.findAll();
    }

    public List<EnergyConsumption> getEnergyDataByDevice(String deviceName) {
        return repository.findByDeviceName(deviceName);
    }

    public EnergyConsumption saveEnergyData(String deviceName, double powerUsage) {
        EnergyConsumption data = new EnergyConsumption(deviceName, powerUsage, LocalDateTime.now());
        return repository.save(data);
    }
}
