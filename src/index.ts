import KeycloakAdminClient from 'keycloak-admin';
import { Credentials } from 'keycloak-admin/lib/utils/auth';
import { cnpj, cpf } from 'cpf-cnpj-validator';
import { RoleMappingPayload } from 'keycloak-admin/lib/defs/roleRepresentation';
// import KeycloakConnect from 'keycloak-connect';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const createGroupAndUsers = async () => {
    function getAdmin(): KeycloakAdminClient {
        return new KeycloakAdminClient({
            baseUrl: 'https://keycloak.keycloak.example.com/auth',
            realmName: 'spike',
        });
    }
    async function getKeycloakAdminClientAuthenticated() {
        const credentials = {
            grantType: 'client_credentials',
            clientId: 'spike',
            clientSecret: '31f69a3f-0649-4be5-b86a-29ecc1de824f',
        } as Credentials;
        
        const keycloakAdminClient = getAdmin();
        
        await keycloakAdminClient.auth(credentials).catch((authAdminError) => {
            // console.log({authAdminError});
            console.log({authAdminErrorData: authAdminError.response.data});
        });
        
        return keycloakAdminClient;
    }
    
    const keycloakAdminClient = await getKeycloakAdminClientAuthenticated();

    const users = await keycloakAdminClient.users.find({ username: 'testpass' })
    .catch((userErro) => {
        console.log({userErro});
        console.log({userErroData: userErro.response.data});
    });
    console.log({users})
    console.log({requiredActions: users[0].requiredActions})
    await keycloakAdminClient.auth({
        username: 'testpass',
        password: 'test',
        grantType: 'password',
        clientId: 'spike',
        clientSecret: '31f69a3f-0649-4be5-b86a-29ecc1de824f',
    }).catch((authError) => {
        // console.log({authError});
        console.log({authErrorData: authError.response.data});
    })

    const profile_roles = {
        consultant: 'profile-consultant',
        launcher: 'profile-launcher',
        authorizer: 'profile-authorizer',
        master: 'profile-master',
    };

    interface IAttributes {
        accounts: number[];
        cellphone: string;
        cnpj: string;
        cpf: string;
        idClientAssociation: number;
        idClient?: string;
        nickname?: string;
        completeName?: string;
    }
    
    // const groupName = cnpj.generate();
    // console.log({ groupName });

    try {
        // const roles = await keycloakAdminClient.roles.find({
        //     realm: 'spike',
        // });
        // console.log({roles})
        // const { id: groupId } = await keycloakAdminClient.groups.create({
        //     name: groupName,
        // })
        // console.log({ groupId });
        // console.log({master:roles.find((role) => role.name === profile_roles.master).id})
        // const user1 = {
        //     groups: [groupName],
        //     realmRoles: [],
        //     email: 'marlos.a.gomes@db1.com.br',
        //     emailVerified: true,
        //     enabled: true,
        //     firstName: 'Marlos',
        //     username: `${groupName}Marlos`,
        //     attributes: {
        //         accounts: [1234],
        //         cellphone: '046984034699',
        //         cnpj: groupName,
        //         cpf: cpf.generate(),
        //         idClientAssociation: 4321,
        //         completeName: 'Marlos Augusto Martins Gomes',
        //         nickname: 'Marlos'    
        //     } as IAttributes,
        //     credentials: [{
        //       temporary: false,
        //       type: 'password',
        //       value: 'SenhaBaguah',
        //     }],
        //     realm: 'spike'
        // }
        // const { id: user1Id } = await keycloakAdminClient.users.create(user1);
        // await keycloakAdminClient.users.addRealmRoleMappings({
        //     id: user1Id,
        //     roles: [roles.find((role) => role.name === profile_roles.master) as RoleMappingPayload]});
        // console.log({ user1 });

        // const user2 = {
        //     groups: [groupName],
        //     email: 'marlos.b.gomes@db1.com.br',
        //     emailVerified: true,
        //     enabled: true,
        //     firstName: 'Augusto',
        //     username: `${groupName}Augusto`,
        //     attributes: {
        //         accounts: [1234],
        //         cellphone: '046984034699',
        //         cnpj: groupName,
        //         cpf: cpf.generate(),
        //         idClientAssociation: 4321,
        //         completeName: 'Augusto Marlos Martins Gomes',
        //         nickname: 'Augusto'    
        //     } as IAttributes,
        //     credentials: [{
        //       temporary: false,
        //       type: 'password',
        //       value: 'SenhaBaguah',
        //     }]
        // }
        // const { id: user2Id } = await keycloakAdminClient.users.create(user2);
        // await keycloakAdminClient.users.addRealmRoleMappings({
        //     id: user2Id,
        //     roles: [roles.find((role) => role.name === profile_roles.authorizer) as RoleMappingPayload]});
        // console.log({ user2 });

        // const user3 = {
        //     groups: [groupName],
        //     email: 'marlos.c.gomes@db1.com.br',
        //     emailVerified: true,
        //     enabled: true,
        //     firstName: 'Martins',
        //     // username: `${groupName}Martins`,
        //     attributes: {
        //         accounts: [1234],
        //         cellphone: '046984034699',
        //         cnpj: groupName,
        //         cpf: cpf.generate(),
        //         idClientAssociation: 4321,
        //         completeName: 'Martins Marlos Augusto Gomes',
        //         nickname: 'Martins'    
        //     } as IAttributes,
            // credentials: [{
            //   temporary: false,
            //   type: 'password',
            //   value: 'SenhaBaguah',
            // }]
        // }
        // const { id: user3Id } = await keycloakAdminClient.users.create(user3);
        // await keycloakAdminClient.users.addRealmRoleMappings({
        //     id: user3Id,
        //     roles: [roles.find((role) => role.name === profile_roles.launcher) as RoleMappingPayload]});
        // console.log({ user3 });

        // const user4 = {
        //     groups: [groupName],
        //     email: 'marlos.d.gomes@db1.com.br',
        //     emailVerified: true,
        //     enabled: true,
        //     firstName: 'Gomes',
        //     username: `${groupName}Gomes`,
        //     attributes: {
        //         accounts: [1234],
        //         cellphone: '046984034699',
        //         cnpj: groupName,
        //         cpf: cpf.generate(),
        //         idClientAssociation: 4321,
        //         completeName: 'Gomes Marlos Augusto Martins',
        //         nickname: 'Gomes'    
        //     } as IAttributes,
        //     credentials: [{
        //       temporary: false,
        //       type: 'password',
        //       value: 'SenhaBaguah',
        //     }]
        // }
        // const { id: user4Id } = await keycloakAdminClient.users.create(user4);
        // await keycloakAdminClient.users.addRealmRoleMappings({
        //     id: user4Id,
        //     roles: [roles.find((role) => role.name === profile_roles.consultant) as RoleMappingPayload]});
        // console.log({ user4 });
    } catch (error) {
        console.log({respo: error.response})
        console.log({data: error.response.data})
        throw error        
    }
};

createGroupAndUsers();

/**
 * LISTAR ROLES DO REALM:
 * Cria realm role admin
 * Cria client
 * Adiciona realm role admin ao Service Account Roles do client * 
 */

/**
 * Toda intereção com user realizar pela api de user, e esta por sua vez se comunica com o keycloak
 * Criar client com x roles especificas
 * Criar realm roles para perfis
 * Criar composição de client roles em role de perfil
 * Criar composição de client roles em group de perfil
 * Criar lista de permissões no banco, contendo seus acessos
 * Consulta de groups
 * 
 * Atribuir role comum a um usuário e verificar disposição no JWT
 * Atribuir role composta a um usuário e verificar disposição no JWT
 */

/**
 * TOKEN COM ROLE COMPOSTA:
 * eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjc1BGc0ZPRi00RUFWNTE2SklvSU9ZZlhFS1VBMFhCa0s5YkdvZjZkZ1BzIn0.eyJleHAiOjE2MjM5NjQ1MDksImlhdCI6MTYyMzk2NDIwOSwianRpIjoiZGQ2N2Q2NWQtZTgyZi00YzdmLTlhOTgtNzRjOThlZmY0YzY1IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5rZXljbG9hay5leGFtcGxlLmNvbS9hdXRoL3JlYWxtcy9zcGlrZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJjNTNlNzRjMC1lYTUwLTRkZWUtYmVmMy1lNDZlYTNkYzgzNGEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzcGlrZSIsInNlc3Npb25fc3RhdGUiOiI4OTgxYjRiMS02OTY0LTQ0NzktYTc2MS1iMmMxZDQ2MzA1ODYiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInByb2ZpbGUtY29uc3VsdGFudCIsInByb2ZpbGUtYXV0aG9yaXplciIsInByb2ZpbGUtbWFzdGVyIiwib2ZmbGluZV9hY2Nlc3MiLCJwcm9maWxlLWxhdW5jaGVyIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmlja25hbWUiOiJNYXJsb3MiLCJuYW1lIjoiTWFybG9zIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNjgzNTI4NDYyNDU4MjhtYXJsb3MiLCJnaXZlbl9uYW1lIjoiTWFybG9zIiwiZW1haWwiOiJtYXJsb3MuYS5nb21lc0BkYjEuY29tLmJyIn0.D6NjJ_crR3n2RGCcSlXylwhNYc_KCC6Z8zfJCdqwrGwoeRAqqvgysZkgPvaanNSC7wmHgCuBebP_zgcDl8ULrIHA4fMkCQsfDdak4e_iREHopqdzw1cnKSN9i2_K6drOVv_05yPdvEHhstlcFBmiD0x7231cdabcXnJNcHZEZyUqVABWnAD76pNEpSztKEZ18_PqW8Xnp3W-Kk6bflwrV1xcbaVRu8FRrHx4rrXhLQQLsf8WPDC7umojK7PwqDC0KnlOhDGvplPZYn9hehbAVuKn4YsKBk6E_wzYblQfzDNH4eG8W_bqLNI7e8Nxw5yT9z8EChA3flo6_GyNaObarQ
 */

/**
 * TOKEN COM ROLE COMMUM:
 * eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjc1BGc0ZPRi00RUFWNTE2SklvSU9ZZlhFS1VBMFhCa0s5YkdvZjZkZ1BzIn0.eyJleHAiOjE2MjM5NjQzOTcsImlhdCI6MTYyMzk2NDA5NywianRpIjoiYWQyZjg1MjMtYTAzYS00NmYzLTk4ZWYtYWVhYmY2Y2I1YmY2IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5rZXljbG9hay5leGFtcGxlLmNvbS9hdXRoL3JlYWxtcy9zcGlrZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJmZDc1MmEyNy0xYWEzLTQxYzYtOTRmNy0yODBhYWU2ZjJjYzYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzcGlrZSIsInNlc3Npb25fc3RhdGUiOiIyOWVlNTAwZi1iNWE5LTQ2ZmUtYjYxNS1jMTgzYzgxMTgzYmMiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInByb2ZpbGUtY29uc3VsdGFudCIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmlja25hbWUiOiJHb21lcyIsIm5hbWUiOiJHb21lcyIsInByZWZlcnJlZF91c2VybmFtZSI6IjY4MzUyODQ2MjQ1ODI4Z29tZXMiLCJnaXZlbl9uYW1lIjoiR29tZXMiLCJlbWFpbCI6Im1hcmxvcy5kLmdvbWVzQGRiMS5jb20uYnIifQ.kKwgUZ0jP3B11VPNUfSeUxTiQdxYfQzbHziVpG6aLw4Xn6F6hTbxUwZd3-oTOgSbhi1V1ey8ZI4G6xEVpyjzHZmT4RV4EBqkaZqNRiuhCR-cQg4rKu2pz_VbUVf7MVjTJLxAPZOA10onKnn0HQnWa-osDjBlpPdhH3QPl4UAJr6zBfR4Kq0JCwU2WOOZkA6DBVG29VsLIQDjx6R56ZOaFACUTTEiHtjV_a-U2IUyJdJyNaZP4R52CNNRNoB1oQ6QVB3SV4A_yHdQrmeRQa3mvLHlA3hmzdK7-j5ATEpD7Zo-NxyahUxn9Zs0v_2qGGzZpCPPdLDe5syXGsf6Af0OCw
 */
