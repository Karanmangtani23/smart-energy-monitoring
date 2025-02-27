package com.smartenergy.repository;

import com.smartenergy.model.EnergyConsumption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EnergyConsumptionRepository extends JpaRepository<EnergyConsumption, Long> {
    List<EnergyConsumption> findByDeviceName(String deviceName);
}
