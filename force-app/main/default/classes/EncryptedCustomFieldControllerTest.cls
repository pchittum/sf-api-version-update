@isTest
class EncryptedCustomFieldControllerTest {
    @isTest static void testController() {
        EncryptedCustomFieldController controller = new EncryptedCustomFieldController();
        System.Assert.areNotEqual(null, controller.getFields());
    }
    
    @isTest static void testEncryptedCustomFields() {
        EncryptedCustomField field = new EncryptedCustomField('a', true, 'b', 'c', false);
        System.Assert.areEqual('a', field.name);
        System.Assert.areEqual(true, field.isEncrypted);
        System.Assert.areEqual('b', field.type);
        System.Assert.areEqual('c', field.objName);
        System.Assert.areEqual(false, field.isCustom);
    }

}