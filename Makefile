###########################################################################
## Make file
## @author: Irfan Andriansyah <irfan@99.co>
## @since: 2021.01.09
###########################################################################


###########################################################################
## Update Tag Github
###########################################################################
update-major:
	@node_modules/.bin/ts-node -T -r  tsconfig-paths/register --project ./tsconfig.json pattern/utils/change-log/index.ts --type=major

update-minor:
	@node_modules/.bin/ts-node -T -r  tsconfig-paths/register --project ./tsconfig.json pattern/utils/change-log/index.ts --type=minor

update-patch:
	@node_modules/.bin/ts-node -T -r  tsconfig-paths/register --project ./tsconfig.json pattern/utils/change-log/index.ts --type=patch