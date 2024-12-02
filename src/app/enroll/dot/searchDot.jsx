import axios from "axios";

export async function searchDot(number) {
  const response = await axios.post(
    `https://dts-test-api.upforks.com/dot-search?dot=${+number}&searchBy=usdot`,
    {
      dot: +number,
      searchBy: "usdot",
    }
  );
  const data = response?.data?.data;
  const payload = {
    entityType: data.entityType,
    operatingStatus: data.operatingStatus,
    outOfServiceDate: data.outOfServiceDate,
    legalName: data.legalName,
    dbaName: data.dbaName,
    physicalAddress: data.physicalAddress,
    phone: data.phone,
    mailingAddress: data.mailingAddress,
    usdot: data.usdot,
    mc_mx_number: data.mc_mx_number,
    state_carrier_id_number: data.state_carrier_id_number,
    duns_number: data.duns_number,
    driver_count: data.driver_count,
    power_units_count: data.power_units_count,
    snapshot_date: data.snapshot_date,
  };
  console.log("data: ", data);
  return payload;
}
