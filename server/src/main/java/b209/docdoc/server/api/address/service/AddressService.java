package b209.docdoc.server.api.address.service;

import b209.docdoc.server.api.address.dto.Request.AddressEditorReq;
import b209.docdoc.server.api.address.dto.Request.AddressRegisterReq;
import b209.docdoc.server.api.address.dto.Response.AddressListRes;
import b209.docdoc.server.config.security.auth.MemberDTO;

public interface AddressService {
    public String saveOneAddress(AddressRegisterReq req, MemberDTO member);

    public AddressListRes getAddressListByGroup(String group, MemberDTO member);

    public String removeAddress(String addressIdx, MemberDTO member);

    public String removeAddressByGroup(String group, MemberDTO member);

    public AddressListRes getAddressEditorListByName(String name, MemberDTO member);

    public String saveAddressEditor(AddressEditorReq req, MemberDTO member);
}
