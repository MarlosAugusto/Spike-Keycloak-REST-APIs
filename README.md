# Spike-Keycloak-REST-APIs
Project for study about keycloak REST APIs

#### User token, with compound role:
`eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjc1BGc0ZPRi00RUFWNTE2SklvSU9ZZlhFS1VBMFhCa0s5YkdvZjZkZ1BzIn0.eyJleHAiOjE2MjM5NjQ1MDksImlhdCI6MTYyMzk2NDIwOSwianRpIjoiZGQ2N2Q2NWQtZTgyZi00YzdmLTlhOTgtNzRjOThlZmY0YzY1IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5rZXljbG9hay5leGFtcGxlLmNvbS9hdXRoL3JlYWxtcy9zcGlrZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJjNTNlNzRjMC1lYTUwLTRkZWUtYmVmMy1lNDZlYTNkYzgzNGEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzcGlrZSIsInNlc3Npb25fc3RhdGUiOiI4OTgxYjRiMS02OTY0LTQ0NzktYTc2MS1iMmMxZDQ2MzA1ODYiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInByb2ZpbGUtY29uc3VsdGFudCIsInByb2ZpbGUtYXV0aG9yaXplciIsInByb2ZpbGUtbWFzdGVyIiwib2ZmbGluZV9hY2Nlc3MiLCJwcm9maWxlLWxhdW5jaGVyIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmlja25hbWUiOiJNYXJsb3MiLCJuYW1lIjoiTWFybG9zIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNjgzNTI4NDYyNDU4MjhtYXJsb3MiLCJnaXZlbl9uYW1lIjoiTWFybG9zIiwiZW1haWwiOiJtYXJsb3MuYS5nb21lc0BkYjEuY29tLmJyIn0.D6NjJ_crR3n2RGCcSlXylwhNYc_KCC6Z8zfJCdqwrGwoeRAqqvgysZkgPvaanNSC7wmHgCuBebP_zgcDl8ULrIHA4fMkCQsfDdak4e_iREHopqdzw1cnKSN9i2_K6drOVv_05yPdvEHhstlcFBmiD0x7231cdabcXnJNcHZEZyUqVABWnAD76pNEpSztKEZ18_PqW8Xnp3W-Kk6bflwrV1xcbaVRu8FRrHx4rrXhLQQLsf8WPDC7umojK7PwqDC0KnlOhDGvplPZYn9hehbAVuKn4YsKBk6E_wzYblQfzDNH4eG8W_bqLNI7e8Nxw5yT9z8EChA3flo6_GyNaObarQ`

#### User token, with simple role:
`eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjc1BGc0ZPRi00RUFWNTE2SklvSU9ZZlhFS1VBMFhCa0s5YkdvZjZkZ1BzIn0.eyJleHAiOjE2MjM5NjQzOTcsImlhdCI6MTYyMzk2NDA5NywianRpIjoiYWQyZjg1MjMtYTAzYS00NmYzLTk4ZWYtYWVhYmY2Y2I1YmY2IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5rZXljbG9hay5leGFtcGxlLmNvbS9hdXRoL3JlYWxtcy9zcGlrZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJmZDc1MmEyNy0xYWEzLTQxYzYtOTRmNy0yODBhYWU2ZjJjYzYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzcGlrZSIsInNlc3Npb25fc3RhdGUiOiIyOWVlNTAwZi1iNWE5LTQ2ZmUtYjYxNS1jMTgzYzgxMTgzYmMiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInByb2ZpbGUtY29uc3VsdGFudCIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmlja25hbWUiOiJHb21lcyIsIm5hbWUiOiJHb21lcyIsInByZWZlcnJlZF91c2VybmFtZSI6IjY4MzUyODQ2MjQ1ODI4Z29tZXMiLCJnaXZlbl9uYW1lIjoiR29tZXMiLCJlbWFpbCI6Im1hcmxvcy5kLmdvbWVzQGRiMS5jb20uYnIifQ.kKwgUZ0jP3B11VPNUfSeUxTiQdxYfQzbHziVpG6aLw4Xn6F6hTbxUwZd3-oTOgSbhi1V1ey8ZI4G6xEVpyjzHZmT4RV4EBqkaZqNRiuhCR-cQg4rKu2pz_VbUVf7MVjTJLxAPZOA10onKnn0HQnWa-osDjBlpPdhH3QPl4UAJr6zBfR4Kq0JCwU2WOOZkA6DBVG29VsLIQDjx6R56ZOaFACUTTEiHtjV_a-U2IUyJdJyNaZP4R52CNNRNoB1oQ6QVB3SV4A_yHdQrmeRQa3mvLHlA3hmzdK7-j5ATEpD7Zo-NxyahUxn9Zs0v_2qGGzZpCPPdLDe5syXGsf6Af0OCw`