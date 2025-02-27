package com.smartenergy.controller;

import com.smartenergy.model.EnergyConsumption;
import com.smartenergy.service.EnergyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/energy")
public class EnergyController {

    @Autowired
    private EnergyService service;

    @GetMapping("/all")
    public List<EnergyConsumption> getAllData() {
        return service.getAllEnergyData();
    }

    @GetMapping("/{device}")
    public List<EnergyConsumption> getDataByDevice(@PathVariable String device) {
        return service.getEnergyDataByDevice(device);
    }

    @PostMapping("/add")
    public EnergyConsumption addEnergyData(@RequestParam String deviceName, @RequestParam double powerUsage) {
        return service.saveEnergyData(deviceName, powerUsage);
    }
}
