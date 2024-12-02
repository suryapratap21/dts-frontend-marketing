import axios from "axios";

export async function searchDot(number) {
  const { data } = await axios.post(
    "https://dts-test-api.upforks.com/api/dot-search",
    {
      dot: +number,
      searchBy: "usdot",
    }
  );
  const payload = {
    entityType: data.entity_type,
    operatingStatus: "ACTIVE",
    outOfServiceDate: "None",
    legalName: data.legal_name,
    dbaName: data.dba_name,
    physicalAddress: data.physical_address,
    phone: data.phone,
    mailingAddress: data.mailing_address,
    usdot: data.usdot,
    mc_mx_number: data.mc_mx_ff_numbers,
    state_carrier_id_number: "",
    duns_number: data.duns_number,
    driver_count: data.drivers,
    power_units_count: data.power_units,
    snapshot_date: data.snapshot_date,
  };
  console.log("data: ", data);
  return payload;
}
